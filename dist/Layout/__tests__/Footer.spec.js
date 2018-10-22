import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Footer from '../Footer.vue';
describe('Footer.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Footer, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});