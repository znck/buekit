import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Table from '../Table.vue';
describe('Table.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Table, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});