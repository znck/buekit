import { storiesOf } from '@storybook/vue';
import xInput from '../Input.vue';
import Field from '../Field.vue';
import Control from '../Control.vue';
var components = {
  Field: Field,
  xInput: xInput,
  Control: Control
};

function render(template) {
  return {
    data: function data() {
      return {
        value: ''
      };
    },
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(xInput.name, module).add('default', function () {
  return render("\n    Default\n    <xInput v-model=value placeholder=\"Text input\" />\n\n    {{ value }}\n    ");
}).add('colors', function () {
  return render("\n    <Field>\n      <Control v-model=value color=primary placeholder=\"Primary input\" />\n    </Field>\n    <Field>\n      <Control v-model=value color=info placeholder=\"Info input\" />\n    </Field>\n    <Field>\n      <Control v-model=value color=link placeholder=\"Link input\" />\n    </Field>\n    <Field>\n      <Control v-model=value color=success placeholder=\"Success input\" />\n    </Field>\n    <Field>\n      <Control v-model=value color=warning placeholder=\"Warning input\" />\n    </Field>\n    <Field>\n      <Control v-model=value color=danger placeholder=\"Danger input\" />\n    </Field>\n    ");
}).add('sizes', function () {
  return render("\n    <Field>\n      <Control v-model=value size=small placeholder=\"Small input\" />\n    </Field>\n    <Field>\n      <Control v-model=value placeholder=\"Default input\" />\n    </Field>\n    <Field>\n      <Control v-model=value size=medium placeholder=\"Medium input\" />\n    </Field>\n    <Field>\n      <Control v-model=value size=large placeholder=\"Large input\" />\n    </Field>\n    ");
}).add('states', function () {
  return render("\n    <Field>\n      <Control v-model=value placeholder=\"Normal input\" />\n    </Field>\n    <Field>\n      <Control v-model=value hovered placeholder=\"Hovered input\" />\n    </Field>\n    <Field>\n      <Control v-model=value focused placeholder=\"Focused input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading placeholder=\"Loading input\" />\n    </Field>\n    <Field>\n      <Control v-model=value disabled placeholder=\"Disabled input\" />\n    </Field>\n    <Field>\n      <Control :value=\"value || 'Readonly input'\" readonly/>\n    </Field>\n    <Field>\n      <Control :value=\"value || 'Static input'\" static readonly/>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email size=small>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email size=medium>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email size=large>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email color=success>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    Size control with loading:\n    <Field>\n      <Control v-model=value loading size=small placeholder=\"Small input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading placeholder=\"Default input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading size=medium placeholder=\"Medium input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading size=large placeholder=\"Large input\" />\n    </Field>\n    ");
}).add('textarea default', function () {
  return render("\n    Default\n    <xInput v-model=value placeholder=\"Text input\" large-text/>\n    <br>\n    <xInput v-model=value placeholder=\"Text input\" rows=10 large-text/>\n    ");
}).add('textarea colors', function () {
  return render("\n    <Field>\n      <Control v-model=value color=primary placeholder=\"Primary input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value color=info placeholder=\"Info input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value color=link placeholder=\"Link input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value color=success placeholder=\"Success input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value color=warning placeholder=\"Warning input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value color=danger placeholder=\"Danger input\"  large-text/>\n    </Field>\n    ");
}).add('textarea sizes', function () {
  return render("\n    <Field>\n      <Control v-model=value size=small placeholder=\"Small input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value placeholder=\"Default input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value size=medium placeholder=\"Medium input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value size=large placeholder=\"Large input\"  large-text/>\n    </Field>\n    ");
}).add('textarea states', function () {
  return render("\n    <Field>\n      <Control v-model=value placeholder=\"Normal input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value hovered placeholder=\"Hovered input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value focused placeholder=\"Focused input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value loading placeholder=\"Loading input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value disabled placeholder=\"Disabled input\"  large-text/>\n    </Field>\n    <Field>\n      <Control :value=\"value || 'Readonly input'\" readonly large-text/>\n    </Field>\n    <Field>\n      <Control :value=\"value || 'Static input'\" static readonly large-text/>\n    </Field>\n\n    Size control with loading:\n    <Field>\n      <Control v-model=value loading size=small placeholder=\"Small input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value loading placeholder=\"Default input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value loading size=medium placeholder=\"Medium input\"  large-text/>\n    </Field>\n    <Field>\n      <Control v-model=value loading size=large placeholder=\"Large input\"  large-text/>\n    </Field>\n    ");
});