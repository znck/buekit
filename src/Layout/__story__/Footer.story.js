import {storiesOf} from '@storybook/vue'

import Footer from './Footer.vue'
import Container from './Container.vue'

import 'bulma'

const components = {Footer, Container}

function render(template) {
	return {template, components}
}

storiesOf(Footer.name, module)
  .add('default', () => render(
    `
     <Footer>
      <Container>
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </Container>
     </Footer>
    `
  ))
