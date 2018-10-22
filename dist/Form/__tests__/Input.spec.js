import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Input from '../Input.vue';
describe('Input.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Input, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});