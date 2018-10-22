import { storiesOf } from '@storybook/vue';
import Box from '../Box.vue';
import AbstractBox from '../AbstractBox.vue';
var components = {
  AbstractBox: AbstractBox,
  Box: Box
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Box.name, module).add('default', function () {
  return render("\n     <Box>This content is in Box.</Box>\n    ");
}).add('abstract', function () {
  return render("\n     <Box abstract>\n      <p>This content is in Box.</p>\n     </Box>\n    ");
});