import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Tags from '../Tags.vue';
describe('Tags.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Tags, {
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