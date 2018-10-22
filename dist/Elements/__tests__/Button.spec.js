import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import xButton from '../Button.vue';
describe('Button.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(xButton, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});