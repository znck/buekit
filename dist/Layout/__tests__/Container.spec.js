import { shallow } from 'vue-test-utils';
import { createRenderer } from 'vue-server-renderer';
import Container from '../Container.vue';

function snapshots(options) {
  options.forEach(function (option) {
    return it('matches snapshot', function () {
      var wrapper = shallow(Container, {
        props: option,
        slots: {
          default: '<p>Content</p>'
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
}

describe('Container.vue', function () {
  snapshots([{}, {
    type: 'fluid'
  }]);
});