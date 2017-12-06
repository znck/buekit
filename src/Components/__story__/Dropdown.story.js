import {storiesOf} from '@storybook/vue'

import Dropdown from '../Dropdown.vue'
import Active from '../../Abstract/Active.vue'

const components = {Active, Dropdown}
function render(template) {
	return {
		data() {
			return {open: false}
		},
		template: `<div style="padding: 1.25rem">${template}</div>`,
		components
	}
}

storiesOf(Dropdown.name, module)
  .add('default', () => render(
    `
     <Dropdown title="Dropdown Button" :open=open @open="result => { open = result }">
        <a href="#">
          Dropdown item
        </a>
        <a>
          Other dropdown item
        </a>
        <Active>
          <a href="#">
            Active dropdown item
          </a>
        </Active>
        <a href="#">
          Other dropdown item
        </a>
        <hr>
        <a href="#">
          With a divider
        </a>
     </Dropdown>
    `
  ))
  .add('content', () => render(
    `
     <Dropdown title="Content" :open=open @open="result => { open = result }">
        <div>
          <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
        </div>
        <hr>
        <div>
          <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
        </div>
        <hr>
        <a href="#">
          This is a link
        </a>
     </Dropdown>
    `
  ))
  .add('hoverable', () => render(
    `
     <Dropdown title="Content" hoverable>
        <a href="#">
          Overview
        </a>
        <a href="#">
          Modifiers
        </a>
        <a href="#">
          Grid
        </a>
        <a href="#">
          Form
        </a>
        <a href="#">
          Elements
        </a>
        <a href="#">
          Components
        </a>
        <a href="#">
          Layout
        </a>
        <hr>
        <a href="#">
          More
        </a>
     </Dropdown>
    `
  ))
  .add('align right', () => render(
    `
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <Dropdown title="Content" hoverable right>
        <a href="#">
          Overview
        </a>
        <a href="#">
          Modifiers
        </a>
        <a href="#">
          Grid
        </a>
        <a href="#">
          Form
        </a>
        <a href="#">
          Elements
        </a>
        <a href="#">
          Components
        </a>
        <a href="#">
          Layout
        </a>
        <hr>
        <a href="#">
          More
        </a>
     </Dropdown>
    `
  ))
  .add('open up', () => render(
    `
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     <Dropdown title="Content" hoverable direction=up>
        <a href="#">
          Overview
        </a>
        <a href="#">
          Modifiers
        </a>
        <a href="#">
          Grid
        </a>
        <a href="#">
          Form
        </a>
        <a href="#">
          Elements
        </a>
        <a href="#">
          Components
        </a>
        <a href="#">
          Layout
        </a>
        <hr>
        <a href="#">
          More
        </a>
     </Dropdown>
    `
  ))
