import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Modal from '../Modal.vue';
describe('Modal.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Modal, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});