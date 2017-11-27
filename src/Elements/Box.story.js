import {storiesOf} from '@storybook/vue'

import Box from './Box.vue'
import AbstractBox from './AbstractBox.vue'

const components = {AbstractBox, Box}
function render(template) {
	return {template, components}
}

storiesOf(Box.name, module)
  .add('default', () => render(
    `
     <Box>This content is in Box.</Box>
    `
  ))
  .add('abstract', () => render(
    `
     <Box abstract>
      <p>This content is in Box.</p>
     </Box>
    `
  ))
