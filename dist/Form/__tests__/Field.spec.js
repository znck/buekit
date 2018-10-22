import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Field from '../Field.vue';
describe('Field.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Field, {});
    var renderer = createRenderer();
    renderer.renderToString(wrapper.vm, function (err, str) {
      if (err) {
        throw new Error(err);
      }

      expect(str).toMatchSnapshot();
    });
  });
});