import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import MenuList from '../MenuList.vue';
describe('MenuList.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(MenuList, {
      context: {
        children: []
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