import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Message from '../Message.vue';
describe('Message.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Message, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});