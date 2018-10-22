import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Subtitle from '../Subtitle.vue';
describe('Subtitle.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Subtitle, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});