import { storiesOf } from '@storybook/vue';
import Icon from '../Icon.vue';
import 'bulma';
var components = {
  Icon: Icon
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Icon.name, module).add('default', function () {
  return render("\n     <div>\n      <Icon size=small style=\"background: #ffdd57\">\n        <i class=\"fa fa-home\"></i>\n      </Icon>\n      <Icon style=\"background: #ffdd57\">\n        <i class=\"fa fa-lg fa-home\"></i>\n      </Icon>\n      <Icon size=medium style=\"background: #ffdd57\">\n        <i class=\"fa fa-2x fa-home\"></i>\n      </Icon>\n      <Icon size=large style=\"background: #ffdd57\">\n        <i class=\"fa fa-3x fa-home\"></i>\n      </Icon>\n     </div>\n    ");
});