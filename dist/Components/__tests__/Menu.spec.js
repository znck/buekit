import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Menu from '../Menu.vue';
describe('Menu.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Menu, {
      context: {
        props: {}
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