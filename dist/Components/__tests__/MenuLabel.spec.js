import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import MenuLabel from '../MenuLabel.vue';
describe('MenuLabel.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(MenuLabel, {
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