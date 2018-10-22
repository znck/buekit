import { shallow } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Column from '../Column.vue';
var renderer = createRenderer();

function snapshots(options) {
  options.forEach(function (option) {
    return it('matches snapshot: ' + JSON.stringify(option), function () {
      var wrapper = shallow(Column, {
        context: {
          props: option
        },
        slots: {
          default: '<p>content</p>'
        }
      });
      expect(wrapper.contains('p')).toBe(true);
      renderer.renderToString(wrapper.vm, function (err, str) {
        if (err) {
          throw new Error(err);
        }

        expect(str).toMatchSnapshot();
      });
    });
  });
}

describe('Column.vue', function () {
  snapshots([{}, {
    narrow: true
  }, {
    'narrow.mobile': true
  }, {
    'narrow.mobile': true,
    'narrow.desktop': true
  }, {
    offset: 'half'
  }, {
    offset: 'half',
    'offset$mobile': 3
  }, {
    offset: 2
  }, {
    size: 'half'
  }, {
    size: 'half',
    'size$mobile': 12
  }, {
    size: 3
  }]);
  it("size props", function () {
    var wrapper = shallow(Column, {
      context: {
        props: {
          size: 'half',
          'size$mobile': 12
        }
      }
    });
    expect(wrapper.classes()).toEqual(['column', 'is-half', 'is-12-mobile']);
  });
});