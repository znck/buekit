import { shallow } from '@vue/test-utils';
import { createRenderer } from 'vue-server-renderer';
import Columns from '../Columns.vue';
var renderer = createRenderer();

function renderWithProps(props) {
  return shallow(Columns, {
    context: {
      props: props
    },
    slots: {
      default: '<p>content</p>'
    }
  });
}

function snapshots(options) {
  options.forEach(function (option) {
    return it('matches snapshot: ' + JSON.stringify(option), function () {
      var wrapper = renderWithProps(option);
      renderer.renderToString(wrapper.vm, function (err, str) {
        if (err) {
          throw new Error(err);
        }

        expect(str).toMatchSnapshot();
      });
    });
  });
}

describe('Columns.vue', function () {
  snapshots([{}, {
    centered: true
  }, {
    vcentered: true
  }, {
    gap: false
  }, {
    gap: 8
  }, {
    mobile: true
  }, {
    tablet: true
  }, {
    desktop: true
  }, {
    multiline: true
  }]);
  test('custom tag', function () {
    var wrapper = renderWithProps({
      tag: 'section'
    });
    expect(wrapper.is('section.columns')).toEqual(true);
  });
});