import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Control from '../Control.vue';
describe('Control.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Control, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});