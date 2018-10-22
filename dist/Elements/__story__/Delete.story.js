import { storiesOf } from '@storybook/vue';
import Delete from '../Delete.vue';
var components = {
  Delete: Delete
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Delete.name, module).add('default', function () {
  return render("\n      <div>\n        <Delete size=small />\n        <Delete />\n        <Delete size=medium />\n        <Delete size=large />\n      </div>\n    ");
});