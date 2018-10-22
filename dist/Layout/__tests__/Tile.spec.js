import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Tile from '../Tile.vue';
describe('Tile.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Tile, {
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