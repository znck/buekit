import {storiesOf} from '@storybook/vue'

import Tile from './Tile.vue'

// Import 'bulma'

const components = {Tile}
function render(template) {
	return {template, components}
}

storiesOf(Tile.name, module)
  .add('default', () => render(
    `
    <Tile ancestor>
      <Tile vertical size=8>
        <Tile>
          <Tile parent vertical>
            <Tile tag=article child class="notification is-primary">
                <p class="title">Vertical...</p>
                <p class="subtitle">Top tile</p>
            </Tile>
            <Tile tag=article child class="notification is-warning">
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
            </Tile>
          </Tile>
          <Tile parent>
            <Tile child class="notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                  <img src="http://bulma.io/images/placeholders/640x480.png">
                </figure>
            </Tile>
          </Tile>
        </Tile>
        <Tile parent>
          <Tile tag=article child class="notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
          </Tile>
        </Tile>
      </Tile>
      <Tile parent>
        <Tile tag=article child class="notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.

                Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.

                Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
              </div>
            </div>
        </Tile>
      </Tile>
    </Tile>
    `
  ))
