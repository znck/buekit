import {storiesOf} from '@storybook/vue'

import Active from '../Abstract/Active.vue'

import xMenu from './Menu.vue'
import MenuLabel from './MenuLabel.vue'
import MenuList from './MenuList.vue'

const components = {xMenu, MenuLabel, MenuList, Active}
function render(template) {
	return {template: `<div style="padding: 1.25rem; width: 300px">${template}</div>`, components}
}

storiesOf(xMenu.name, module)
  .add('default', () => render(
    `
     <xMenu>
      <MenuLabel>General</MenuLabel>
      <MenuList>
        <a>Dashboard</a>
        <!-- should be ignored -->
        <a>Customers</a>
      </MenuList>

      <MenuLabel>Administration</MenuLabel>
      <MenuList>
        <a>Team Settings</a>
        <li>
          <Active>
            <a>Manage Your Team</a>
          </Active>
          <MenuList>
            <a>Members</a>
            <a>Plugins</a>
            <a>Add a member</a>
          </MenuList>
        </li>
        <a>Invitations</a>
        <a>Cloud Storage Environment Settings</a>
        <a>Authentication</a>
      </MenuList>

      <MenuLabel>Transactions</MenuLabel>
      <MenuList class="menu-list">
        <a>Payments</a>
        <a>Transfers</a>
        <a>Balance</a>
      </MenuList>
     </xMenu>
    `
  ))
