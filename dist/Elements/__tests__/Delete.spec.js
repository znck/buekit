import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Delete from '../Delete.vue';
describe('Delete.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Delete, {
      context: {
        props: {}
      }
    });
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});