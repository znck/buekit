import {storiesOf} from '@storybook/vue'

import Tabs from './Tabs.vue'
import Icon from '../Elements/Icon.vue'

const components = {Tabs, Icon}
function render(template) {
	return {template: `<div style="padding: 1.25rem">${template}</div>`, components}
}

storiesOf(Tabs.name, module)
  .add('default', () => render(
    `
    Default
    <Tabs :active=0>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Default Centered
    <Tabs :active=0 centered>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Default Right
    <Tabs :active=0 right>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    With Icons
    <Tabs :active=0 centered>
      <a>
        <Icon><i class="fa fa-image"></i></Icon>
        Pictures
      </a>
      <a>
        <Icon><i class="fa fa-music"></i></Icon>
        Music
      </a>
      <a>
        <Icon><i class="fa fa-film"></i></Icon>
        Videos
      </a>
      <a>
        <Icon><i class="fa fa-file-text-o"></i></Icon>
        Documents
      </a>
    </Tabs>
    `
  ))
  .add('sizes', () => render(
    `
    Small
    <Tabs :active=0 size=small>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Default
    <Tabs :active=0>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Medium
    <Tabs :active=0 size=medium>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Large
    <Tabs :active=0 size=large>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    With Icons
    <Tabs :active=0 centered>
      <a>
        <Icon><i class="fa fa-image"></i></Icon>
        Pictures
      </a>
      <a>
        <Icon><i class="fa fa-music"></i></Icon>
        Music
      </a>
      <a>
        <Icon><i class="fa fa-film"></i></Icon>
        Videos
      </a>
      <a>
        <Icon><i class="fa fa-file-text-o"></i></Icon>
        Documents
      </a>
    </Tabs>
    `
  ))
  .add('styles', () => render(
    `
    Boxed
    <Tabs :active=0 type=boxed>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Toggle
    <Tabs :active=0 type=toggle>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    
    Fullwidth
    <Tabs :active=0 type=fullwidth>
      <a>Pictures</a>
      <a>Music</a>
      <a>Videos</a>
      <a>Documents</a>
    </Tabs>
    `
  ))
