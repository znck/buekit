import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Media from '../Media.vue';

function snapshots(options) {
  options.forEach(function (_temp) {
    var _ref = _temp === void 0 ? [] : _temp,
        _ref$ = _ref[0],
        props = _ref$ === void 0 ? {} : _ref$,
        _ref$2 = _ref[1],
        slots = _ref$2 === void 0 ? {} : _ref$2;

    it('matches snapshot', function () {
      var wrapper = shallow(Media, {
        context: {
          props: props
        },
        slots: slots
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

describe('Media.vue', function () {
  snapshots([[{
    tag: 'article'
  }, {
    default: '<p>Content</p>'
  }], [{
    tag: 'article'
  }, {
    default: '<p>Content</p>',
    left: '<img />'
  }], [{
    tag: 'article'
  }, {
    default: '<p>Content</p>',
    left: '<img />',
    right: '<button />'
  }]]);
});