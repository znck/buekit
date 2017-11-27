import {storiesOf} from '@storybook/vue'

import Icon from './Icon.vue'

import 'bulma'

const components = {Icon}
function render(template) {
	return {template, components}
}

storiesOf(Icon.name, module)
  .add('default', () => render(
    `
     <div>
      <Icon size=small style="background: #ffdd57">
        <i class="fa fa-home"></i>
      </Icon>
      <Icon style="background: #ffdd57">
        <i class="fa fa-lg fa-home"></i>
      </Icon>
      <Icon size=medium style="background: #ffdd57">
        <i class="fa fa-2x fa-home"></i>
      </Icon>
      <Icon size=large style="background: #ffdd57">
        <i class="fa fa-3x fa-home"></i>
      </Icon>
     </div>
    `
  ))
