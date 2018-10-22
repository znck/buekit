import { storiesOf } from '@storybook/vue';
import Container from '../Container.vue';
var components = {
  Container: Container
};
var i = 0;
var wrap = 4;
var colors = ['#209cee', '#23d160', '#ffdd57', '#ff3860'];

var color = function color(z) {
  return colors[typeof z === 'number' ? z % wrap : i++ % wrap];
};

var p = function p(content, c) {
  return "<p style=\"padding: 1.25rem; background: " + color(c) + "; color: white; text-align: center\">" + content + "</p>";
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Container.name, module).add('default', function () {
  return render("\n      <div>\n        <Container>\n          " + p('This is in a container.') + "\n        </Container> \n        <Container type=fluid>\n          " + p('This is in a fluid container.') + "\n        </Container> \n        <Container type=widescreen>\n          " + p('This is in a widescreen container.') + "\n        </Container> \n        <Container type=fullhd>\n          " + p('This is in a fullhd container.') + "\n        </Container> \n      </div>\n      ");
});