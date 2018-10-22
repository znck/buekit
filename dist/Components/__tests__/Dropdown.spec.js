import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Dropdown from '../Dropdown.vue';
describe('Dropdown.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Dropdown, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});