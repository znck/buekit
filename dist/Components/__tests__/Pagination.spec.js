import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Pagination from '../Pagination.vue';
describe('Pagination.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Pagination, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});