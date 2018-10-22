import { storiesOf } from '@storybook/vue';
import xSelect from '../Select.vue';
import Field from '../Field.vue';
import Control from '../Control.vue';
var components = {
  Control: Control,
  Field: Field,
  xSelect: xSelect
};

function render(template) {
  return {
    data: function data() {
      return {
        value: 'Select dropdown',
        value2: ['Select dropdown']
      };
    },
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(xSelect.name, module).add('default', function () {
  return render("\n    <xSelect v-model=\"value\">\n      <option>Select dropdown</option>\n      <option>With options</option>\n    </xSelect>\n    ");
}).add('multiple', function () {
  return render("\n    <xSelect\n      :multiple=8\n      v-model=\"value2\" \n      :options=\"[\n        'Argentina',\n        'Bolivia',\n        'Brazil',\n        'Chile',\n        'Colombia',\n        'Ecuador',\n        'Guyana',\n        'Paraguay',\n        'Peru',\n        'Suriname',\n        'Uruguay',\n        'Venezuela'\n      ]\"\n    />\n    \n    <br><br>\n    {{ value }}\n    ");
}).add('colors', function () {
  return render("\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" color=primary />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" color=link />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" color=info />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" color=success />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" color=warning />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" color=danger />\n      </Control>\n    </Field>\n    ");
}).add('sizes', function () {
  return render("\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" size=small />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" size=medium />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" size=large />\n      </Control>\n    </Field>\n    ");
}).add('states', function () {
  return render("\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" />\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" hovered/>\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" focused/>\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" loading/>\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" disabled/>\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" readonly/>\n      </Control>\n    </Field>\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" readonly static/>\n      </Control>\n    </Field>\n\n    <Field>\n      <Control size=small>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" />\n        <i class=\"fa fa-envelope\" slot=left />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" />\n        <i class=\"fa fa-envelope\" slot=left />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control size=medium>\n        <xSelect v-model=\"value\" :options=\"['Select dropdown', 'With options']\" />\n        <i class=\"fa fa-envelope\" slot=left />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email size=large>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    <Field>\n      <Control :value=\"value\" type=email placeholder=Email color=success>\n        <i class=\"fa fa-envelope\" slot=left />\n        <i class=\"fa fa-check\" slot=right />\n      </Control>\n    </Field>\n\n    Size control with loading:\n    <Field>\n      <Control v-model=value loading size=small placeholder=\"Small input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading placeholder=\"Default input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading size=medium placeholder=\"Medium input\" />\n    </Field>\n    <Field>\n      <Control v-model=value loading size=large placeholder=\"Large input\" />\n    </Field>\n    ");
});