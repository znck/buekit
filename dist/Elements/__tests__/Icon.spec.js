import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Icon from '../Icon.vue';
describe('Icon.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Icon, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});