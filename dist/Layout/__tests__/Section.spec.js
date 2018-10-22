import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Section from '../Section.vue';
describe('Section.vue', function () {
  it('matches snapshot', function () {
    var wrapper = shallow(Section, {
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