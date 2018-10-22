import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Notification from '../Notification.vue';
describe('Notification.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Notification);
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});