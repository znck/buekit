import {storiesOf} from '@storybook/vue'

import Breadcrumb from '../Breadcrumb.vue'

const components = {Breadcrumb}
function render(template) {
	return {template: `<div style="padding: 1.25rem">${template}</div>`, components}
}

storiesOf(Breadcrumb.name, module)
  .add('default', () => render(
    `
     <Breadcrumb>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>
    `
  ))
  .add('alignment', () => render(
    `
    Centered <br>
     <Breadcrumb centered>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>

    Pushed (right)  <br>
     <Breadcrumb pushed>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>
    `
  ))
  .add('separators', () => render(
    `
    Default <br>
     <Breadcrumb>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>

    Arrow <br>
     <Breadcrumb separator=arrow>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>

     Succeeds <br>
     <Breadcrumb separator=succeeds>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
    </Breadcrumb>

    Bullet <br>
     <Breadcrumb separator=bullet>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>

     Dot <br>
     <Breadcrumb separator=dot>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>
    `
  ))
  .add('sizes', () => render(
    `
    Small <br>
     <Breadcrumb size=small>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>
    Default <br>
     <Breadcrumb>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>
    Medium <br>
     <Breadcrumb size=medium>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
    </Breadcrumb>
  Large <br>
     <Breadcrumb size=large>
      <a href="#">Bulma</a>
      <a href="#">Documentation</a>
      <a href="#">Components</a>
      <a href="#">Breadcrumb</a>
     </Breadcrumb>
    `
  ))
