import { storiesOf } from '@storybook/vue'

import Navbar from './Navbar.vue'
import NavbarItem from './NavbarItem.vue'
import NavbarDropdown from './NavbarDropdown.vue'

import 'bulma'

const components = { Navbar, NavbarItem, NavbarDropdown }
function render (template) {
  return { template: `<div style="padding: 1.25rem">${template}</div>`, components }
}

storiesOf('Navbar', module)
  .add('default', () => render(
    `
    <Navbar role=navbar>
      <NavbarItem abstract>
        <a href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </NavbarItem>
    </Navbar>
    `
  ))
  .add('colors', () => render(
    `
    <Navbar color=danger>
      <NavbarItem abstract>
        <a href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </NavbarItem>
    </Navbar>
    `
  ))
  .add('with dropdown', () => render(
    `
    <Navbar>
      <NavbarDropdown title=Docs hoverable>
        <NavbarItem tag=a>Overview</NavbarItem>
        <NavbarItem tag=a>Elements</NavbarItem>
        <NavbarItem tag=a>Components</NavbarItem>
        <hr>
        <NavbarItem>Version 0.6.0</NavbarItem>
      </NavbarDropdown>
    </Navbar>
    `
  ))
