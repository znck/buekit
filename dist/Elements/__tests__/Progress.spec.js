import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Progress from '../Progress.vue';
describe('Progress.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Progress, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});