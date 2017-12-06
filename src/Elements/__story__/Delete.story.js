import {storiesOf} from '@storybook/vue'

import Delete from '../Delete.vue'

const components = {Delete}
function render(template) {
	return {template, components}
}

storiesOf(Delete.name, module)
  .add('default', () => render(
    `
      <div>
        <Delete size=small />
        <Delete />
        <Delete size=medium />
        <Delete size=large />
      </div>
    `
  ))
