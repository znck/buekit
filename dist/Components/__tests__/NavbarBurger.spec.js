import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import NavbarBurger from '../NavbarBurger.vue';
describe('NavbarBurger.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(NavbarBurger, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});