import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Box from '../Box.vue';
describe('Box.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Box, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});