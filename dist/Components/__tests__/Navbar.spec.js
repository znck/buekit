import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Navbar from '../Navbar.vue';
var renderer = createRenderer();

function snapshots() {
  for (var _len = arguments.length, options = new Array(_len), _key = 0; _key < _len; _key++) {
    options[_key] = arguments[_key];
  }

  options.forEach(function (option) {
    return it('matches snapshot: ' + JSON.stringify(option), function () {
      var propsData = option.props,
          _option$slots = option.slots,
          slots = _option$slots === void 0 ? {} : _option$slots;
      slots.default = slots.default || '<p>content</p>';
      var wrapper = shallow(Navbar, {
        propsData: propsData,
        slots: slots
      });
      slots.default === '<p>content</p>' && expect(wrapper.contains('p')).toBe(true);
      renderer.renderToString(wrapper.vm, function (err, str) {
        if (err) {
          throw new Error(err);
        }

        expect(str).toMatchSnapshot();
      });
    });
  });
}

describe('Navbar.vue', function () {
  snapshots({}, {
    props: {
      color: 'white'
    }
  }, {
    props: {
      noBurger: true
    }
  }, {
    props: {
      tag: 'nav'
    }
  }, {
    props: {
      transparent: true
    }
  }, {
    slots: {
      start: '<p>content</p>'
    }
  }, {
    slots: {
      end: '<p>content</p>'
    }
  }, {
    slots: {
      menu: '<p>content</p>'
    }
  });
  it('should have background', function () {
    var wrapper = shallow(Navbar, {
      propsData: {
        color: 'white'
      }
    });
    expect(wrapper.hasClass('is-white')).toBe(true);
  });
  it('should validate background color', function () {
    var wrapper = shallow(Navbar, {
      propsData: {
        color: 'any'
      }
    });
    expect(wrapper.vm.$options.props.color.validator('any')).toBe(false);
  });
});