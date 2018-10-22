import { storiesOf } from '@storybook/vue';
import Dropdown from '../Dropdown.vue';
import Active from '../../Abstract/Active.vue';
var components = {
  Active: Active,
  Dropdown: Dropdown
};

function render(template) {
  return {
    data: function data() {
      return {
        open: false
      };
    },
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Dropdown.name, module).add('default', function () {
  return render("\n     <Dropdown title=\"Dropdown Button\" :open=open @open=\"result => { open = result }\">\n        <a href=\"#\">\n          Dropdown item\n        </a>\n        <a>\n          Other dropdown item\n        </a>\n        <Active>\n          <a href=\"#\">\n            Active dropdown item\n          </a>\n        </Active>\n        <a href=\"#\">\n          Other dropdown item\n        </a>\n        <hr>\n        <a href=\"#\">\n          With a divider\n        </a>\n     </Dropdown>\n    ");
}).add('content', function () {
  return render("\n     <Dropdown title=\"Content\" :open=open @open=\"result => { open = result }\">\n        <div>\n          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>\n        </div>\n        <hr>\n        <div>\n          <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>\n        </div>\n        <hr>\n        <a href=\"#\">\n          This is a link\n        </a>\n     </Dropdown>\n    ");
}).add('hoverable', function () {
  return render("\n     <Dropdown title=\"Content\" hoverable>\n        <a href=\"#\">\n          Overview\n        </a>\n        <a href=\"#\">\n          Modifiers\n        </a>\n        <a href=\"#\">\n          Grid\n        </a>\n        <a href=\"#\">\n          Form\n        </a>\n        <a href=\"#\">\n          Elements\n        </a>\n        <a href=\"#\">\n          Components\n        </a>\n        <a href=\"#\">\n          Layout\n        </a>\n        <hr>\n        <a href=\"#\">\n          More\n        </a>\n     </Dropdown>\n    ");
}).add('align right', function () {
  return render("\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n     <Dropdown title=\"Content\" hoverable right>\n        <a href=\"#\">\n          Overview\n        </a>\n        <a href=\"#\">\n          Modifiers\n        </a>\n        <a href=\"#\">\n          Grid\n        </a>\n        <a href=\"#\">\n          Form\n        </a>\n        <a href=\"#\">\n          Elements\n        </a>\n        <a href=\"#\">\n          Components\n        </a>\n        <a href=\"#\">\n          Layout\n        </a>\n        <hr>\n        <a href=\"#\">\n          More\n        </a>\n     </Dropdown>\n    ");
}).add('open up', function () {
  return render("\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n     <Dropdown title=\"Content\" hoverable direction=up>\n        <a href=\"#\">\n          Overview\n        </a>\n        <a href=\"#\">\n          Modifiers\n        </a>\n        <a href=\"#\">\n          Grid\n        </a>\n        <a href=\"#\">\n          Form\n        </a>\n        <a href=\"#\">\n          Elements\n        </a>\n        <a href=\"#\">\n          Components\n        </a>\n        <a href=\"#\">\n          Layout\n        </a>\n        <hr>\n        <a href=\"#\">\n          More\n        </a>\n     </Dropdown>\n    ");
});