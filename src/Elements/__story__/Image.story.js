import {storiesOf} from '@storybook/vue'

import xImage from '../Image.vue'

const components = {xImage}
function render(template) {
	return {template, components}
}

storiesOf(xImage.name, module)
  .add('default', () => render(
    `
      <div style="padding: 1.25rem; width: 256px">

        <xImage size=128 src="http://bulma.io/images/placeholders/128x128.png" /> <br>

        <xImage size=128>
          <img src="http://bulma.io/images/placeholders/128x128.png">
        </xImage> <br>

        <xImage size=16 src="http://bulma.io/images/placeholders/16x16.png" /> <br>
        <xImage size=24 src="http://bulma.io/images/placeholders/24x24.png" /> <br>
        <xImage size=32 src="http://bulma.io/images/placeholders/32x32.png" /> <br>
        <xImage size=48 src="http://bulma.io/images/placeholders/48x48.png" /> <br>
        <xImage size=64 src="http://bulma.io/images/placeholders/64x64.png" /> <br>
        <xImage size=96 src="http://bulma.io/images/placeholders/96x96.png" /> <br>
        <xImage size=128 src="http://bulma.io/images/placeholders/128x128.png" /> <br>

        Retina <br>
        <xImage size=128 src="http://bulma.io/images/placeholders/256x256.png" /> <br>

        Square <br>
        <xImage width=256 ratio=square src="http://bulma.io/images/placeholders/256x256.png" /> <br>
        <xImage ratio=1by1 src="http://bulma.io/images/placeholders/256x256.png" /> <br>
        4 x 3 <br>
        <xImage ratio=4by3 src="http://bulma.io/images/placeholders/256x256.png" /> <br>
        3 x 2 <br>
        <xImage ratio=3by2 src="http://bulma.io/images/placeholders/256x256.png" /> <br>
        16 x 9 <br>
        <xImage ratio=16by9 src="http://bulma.io/images/placeholders/256x256.png" /> <br>
        2 x 1 <br>
        <xImage ratio=2by1 src="http://bulma.io/images/placeholders/256x256.png" /> <br>

      </div>
    `
  ))
