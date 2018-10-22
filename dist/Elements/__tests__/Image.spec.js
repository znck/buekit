import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Image from '../Image.vue';
describe('Image.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Image, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});