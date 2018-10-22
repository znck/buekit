import { storiesOf } from '@storybook/vue';
import Navbar from '../Navbar.vue';
import NavbarItem from '../NavbarItem.vue';
import NavbarDropdown from '../NavbarDropdown.vue';
import 'bulma';
var components = {
  Navbar: Navbar,
  NavbarItem: NavbarItem,
  NavbarDropdown: NavbarDropdown
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf('Navbar', module).add('default', function () {
  return render("\n    <Navbar role=navbar>\n      <NavbarItem abstract>\n        <a href=\"http://bulma.io\">\n          <img src=\"http://bulma.io/images/bulma-logo.png\" alt=\"Bulma: a modern CSS framework based on Flexbox\" width=\"112\" height=\"28\">\n        </a>\n      </NavbarItem>\n    </Navbar>\n    ");
}).add('colors', function () {
  return render("\n    <Navbar color=danger>\n      <NavbarItem abstract>\n        <a href=\"http://bulma.io\">\n          <img src=\"http://bulma.io/images/bulma-logo.png\" alt=\"Bulma: a modern CSS framework based on Flexbox\" width=\"112\" height=\"28\">\n        </a>\n      </NavbarItem>\n    </Navbar>\n    ");
}).add('with dropdown', function () {
  return render("\n    <Navbar>\n      <NavbarDropdown title=Docs hoverable>\n        <NavbarItem tag=a>Overview</NavbarItem>\n        <NavbarItem tag=a>Elements</NavbarItem>\n        <NavbarItem tag=a>Components</NavbarItem>\n        <hr>\n        <NavbarItem>Version 0.6.0</NavbarItem>\n      </NavbarDropdown>\n    </Navbar>\n    ");
});