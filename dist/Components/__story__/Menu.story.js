import { storiesOf } from '@storybook/vue';
import Active from '../../Abstract/Active.vue';
import xMenu from '../Menu.vue';
import MenuLabel from '../MenuLabel.vue';
import MenuList from '../MenuList.vue';
var components = {
  xMenu: xMenu,
  MenuLabel: MenuLabel,
  MenuList: MenuList,
  Active: Active
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem; width: 300px\">" + template + "</div>",
    components: components
  };
}

storiesOf(xMenu.name, module).add('default', function () {
  return render("\n     <xMenu>\n      <MenuLabel>General</MenuLabel>\n      <MenuList>\n        <a>Dashboard</a>\n        <!-- should be ignored -->\n        <a>Customers</a>\n      </MenuList>\n\n      <MenuLabel>Administration</MenuLabel>\n      <MenuList>\n        <a>Team Settings</a>\n        <li>\n          <Active>\n            <a>Manage Your Team</a>\n          </Active>\n          <MenuList>\n            <a>Members</a>\n            <a>Plugins</a>\n            <a>Add a member</a>\n          </MenuList>\n        </li>\n        <a>Invitations</a>\n        <a>Cloud Storage Environment Settings</a>\n        <a>Authentication</a>\n      </MenuList>\n\n      <MenuLabel>Transactions</MenuLabel>\n      <MenuList class=\"menu-list\">\n        <a>Payments</a>\n        <a>Transfers</a>\n        <a>Balance</a>\n      </MenuList>\n     </xMenu>\n    ");
});