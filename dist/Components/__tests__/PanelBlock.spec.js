import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import PanelBlock from '../PanelBlock.vue';
describe('PanelBlock.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(PanelBlock, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});