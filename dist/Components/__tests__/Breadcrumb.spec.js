import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Breadcrumb from '../Breadcrumb.vue';
describe('Breadcrumb.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Breadcrumb, {
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