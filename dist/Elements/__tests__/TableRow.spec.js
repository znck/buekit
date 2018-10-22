import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import TableRow from '../TableRow.vue';
describe('TableRow.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(TableRow, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});