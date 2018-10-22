import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Card from '../Card.vue';
describe('Card.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Card, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});