import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Title from '../Title.vue';
describe('Title.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Title, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});