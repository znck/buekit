import { storiesOf } from '@storybook/vue'

import Section from './Section.vue'
import Container from './Container.vue'

const components = { Section }

function render (template) {
  return { template, components }
}

storiesOf(Section.name, module)
  .add('default', () => render (
    `
    <Section>
      <Container>
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
      </Container>
    </Section>
    `
  ))
  .add('sizes', () => render(
    `
    <div>
      <Section size=medium>
        <Container>
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </Container>
      </Section>

      <Section size=large>
        <Container>
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </Container>
      </Section>
    </div>
    `
  ))
