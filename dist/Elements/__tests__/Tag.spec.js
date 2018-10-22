import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Tag from '../Tag.vue';
describe('Tag.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Tag, {
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