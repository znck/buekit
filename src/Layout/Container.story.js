import { storiesOf } from '@storybook/vue'

import Container from './Container.vue'

const components = { Container }

// <-- Paragraph Lib.
let i = 0
let wrap = 4
const colors = ['#209cee', '#23d160', '#ffdd57', '#ff3860']
const color = (z) => colors[typeof z === 'number' ? z % wrap :  i++ % wrap]
const p = (content, c) => `<p style="padding: 1.25rem; background: ${color(c)}; color: white; text-align: center">${content}</p>`
// -->

function render (template) {
  return { template, components }
}

storiesOf(Container.name, module)
  .add(
    'default', () => render (
      `
      <div>
        <Container>
          ${p('This is in a container.')}
        </Container> 
        <Container type=fluid>
          ${p('This is in a fluid container.')}
        </Container> 
        <Container type=widescreen>
          ${p('This is in a widescreen container.')}
        </Container> 
        <Container type=fullhd>
          ${p('This is in a fullhd container.')}
        </Container> 
      </div>
      `
    )
  )
