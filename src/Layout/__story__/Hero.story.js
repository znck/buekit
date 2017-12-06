import {storiesOf} from '@storybook/vue'

import Hero from '../Hero.vue'
import Container from '../Container.vue'

import 'bulma'

const components = {Hero, Container}

function render(template) {
	return {template, components}
}

storiesOf(Hero.name, module)
  .add(
    'default', () => render(
      `
      <Hero tag=section>
        <Container>
          <h1 class="title">
            Hero title
          </h1>
          <h2 class="subtitle">
            Hero subtitle
          </h2>
        </Contain>
      </Hero>
      `
    ))
  .add(
    'colors', () => render(
      `
      <div>
        <Hero tag=section color=primary>
          <Container>
            <h1 class="title">
              Primary title
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=info>
          <Container>
            <h1 class="title">
              Info title
            </h1>
            <h2 class="subtitle">
              Info subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=success>
          <Container>
            <h1 class="title">
              Success title
            </h1>
            <h2 class="subtitle">
              Success subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=warning>
          <Container>
            <h1 class="title">
              Warning title
            </h1>
            <h2 class="subtitle">
              Warning subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=danger>
          <Container>
            <h1 class="title">
              Danger title
            </h1>
            <h2 class="subtitle">
              Danger subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=dark>
          <Container>
            <h1 class="title">
              Dark title
            </h1>
            <h2 class="subtitle">
              Dark subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=light>
          <Container>
            <h1 class="title">
              Light title
            </h1>
            <h2 class="subtitle">
              Light subtitle
            </h2>
          </Contain>
        </Hero>
      </div>
      `
    ))
  .add(
    'bold', () => render(
      `
      <div>
        <Hero tag=section color=primary bold size=medium>
          <Container>
            <h1 class="title">
              Primary title
            </h1>
            <h2 class="subtitle">
              Primary subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=info bold size=medium>
          <Container>
            <h1 class="title">
              Info title
            </h1>
            <h2 class="subtitle">
              Info subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=success bold size=medium>
          <Container>
            <h1 class="title">
              Success title
            </h1>
            <h2 class="subtitle">
              Success subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=warning bold size=medium>
          <Container>
            <h1 class="title">
              Warning title
            </h1>
            <h2 class="subtitle">
              Warning subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=danger bold size=medium>
          <Container>
            <h1 class="title">
              Danger title
            </h1>
            <h2 class="subtitle">
              Danger subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=dark bold size=medium>
          <Container>
            <h1 class="title">
              Dark title
            </h1>
            <h2 class="subtitle">
              Dark subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=light bold size=medium>
          <Container>
            <h1 class="title">
              Light title
            </h1>
            <h2 class="subtitle">
              Light subtitle
            </h2>
          </Contain>
        </Hero>
      </div>
      `
    ))
  .add(
    'sizes', () => render(
      `
      <div>
        <Hero tag=section color=primary>
          <Container>
            <h1 class="title">
              Default title
            </h1>
            <h2 class="subtitle">
              Default subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=info size=small>
          <Container>
            <h1 class="title">
              Small title
            </h1>
            <h2 class="subtitle">
              Small subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=success size=medium>
          <Container>
            <h1 class="title">
              Medium title
            </h1>
            <h2 class="subtitle">
              Medium subtitle
            </h2>
          </Contain>
        </Hero>
        <Hero tag=section color=warning size=large>
          <Container>
            <h1 class="title">
              Large title
            </h1>
            <h2 class="subtitle">
              Large subtitle
            </h2>
          </Contain>
        </Hero>
        </Hero>
        <Hero tag=section color=danger size=fullheight>
          <Container>
            <h1 class="title">
              Fullheight title
            </h1>
            <h2 class="subtitle">
            Fullheight subtitle
            </h2>
          </Contain>
        </Hero>
      `
    ))
  .add(
    'head & foot', () => render(
      `
      <Hero tag=section color=primary size=fullheight>
        <Container slot=head>
         In the head.
        </Container>
        <Container>
          <h1 class="title">
            Default title
          </h1>
          <h2 class="subtitle">
            Default subtitle
          </h2>
        </Container>
        <Container slot=foot>
          In the foot.
        </Container>
      </Hero>
      `
    ))
