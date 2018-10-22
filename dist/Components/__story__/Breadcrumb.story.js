import { storiesOf } from '@storybook/vue';
import Breadcrumb from '../Breadcrumb.vue';
var components = {
  Breadcrumb: Breadcrumb
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Breadcrumb.name, module).add('default', function () {
  return render("\n     <Breadcrumb>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n    ");
}).add('alignment', function () {
  return render("\n    Centered <br>\n     <Breadcrumb centered>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n\n    Pushed (right)  <br>\n     <Breadcrumb pushed>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n    ");
}).add('separators', function () {
  return render("\n    Default <br>\n     <Breadcrumb>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n\n    Arrow <br>\n     <Breadcrumb separator=arrow>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n\n     Succeeds <br>\n     <Breadcrumb separator=succeeds>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n    </Breadcrumb>\n\n    Bullet <br>\n     <Breadcrumb separator=bullet>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n\n     Dot <br>\n     <Breadcrumb separator=dot>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n    ");
}).add('sizes', function () {
  return render("\n    Small <br>\n     <Breadcrumb size=small>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n    Default <br>\n     <Breadcrumb>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n    Medium <br>\n     <Breadcrumb size=medium>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n    </Breadcrumb>\n  Large <br>\n     <Breadcrumb size=large>\n      <a href=\"#\">Bulma</a>\n      <a href=\"#\">Documentation</a>\n      <a href=\"#\">Components</a>\n      <a href=\"#\">Breadcrumb</a>\n     </Breadcrumb>\n    ");
});