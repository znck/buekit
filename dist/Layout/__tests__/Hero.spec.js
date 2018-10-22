import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Hero from '../Hero.vue';

function snapshots(options) {
  options.forEach(function (_ref) {
    var _ref$ = _ref[0],
        props = _ref$ === void 0 ? {} : _ref$,
        _ref$2 = _ref[1],
        slots = _ref$2 === void 0 ? {} : _ref$2;
    return it('matches snapshot', function () {
      var wrapper = shallow(Hero, {
        props: props,
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

describe('Hero.vue', function () {
  snapshots([[{
    size: 'medium'
  }, {
    default: '<p>Content</p>'
  }], [{
    size: 'medium'
  }, {
    default: '<p>Content</p>',
    head: '<p>Head</p>'
  }], [{
    size: 'medium'
  }, {
    default: '<p>Content</p>',
    head: '<p>Head</p>',
    foot: '<p>Hoot</p>'
  }], [{
    size: 'medium',
    bold: true
  }, {
    default: '<p>Content</p>'
  }], [{
    tag: 'article'
  }, {
    default: '<p>Content</p>'
  }], [{
    color: 'primary'
  }, {
    default: '<p>Content</p>'
  }]]);
});