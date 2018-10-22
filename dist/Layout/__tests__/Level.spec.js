import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Level from '../Level.vue';

function snapshots() {
  for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  options.forEach(function (option) {
    return it('matches snapshot', function () {
      var wrapper = shallow(Level, {
        context: {
          props: option
        },
        slots: {
          default: '<p>Content</p>'
        }
      });
      var renderer = createRenderer();
      renderer.renderToString(wrapper.vm, function (err, str) {
        if (err) {
          throw new Error(err);
        }

        expect(str).toMatchSnapshot();
      });
    });
  });
}

describe('Level.vue', function () {
  snapshots({}, {
    device: 'mobile'
  }, {
    left: true
  }, {
    right: true
  }, {
    item: true
  });
});