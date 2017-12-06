import {storiesOf} from '@storybook/vue'

import Tags from '../Tags.vue'
import Tag from '../Tag.vue'

const components = {Tag, Tags}
function render(template) {
	return {template: `<div style="padding: 1.25rem">${template}</div>`, components}
}

storiesOf(Tags.name, module)
  .add('default', () => render(
    `
      <Tag>Tag label</Tag>
    `))
  .add('colors', () => render(
     `
      <Tag color=black>Black</Tag>
      <Tag color=dark>Dark</Tag>
      <Tag color=light>Light</Tag>
      <Tag color=white>White</Tag>
      <Tag color=primary>Primary</Tag>
      <Tag color=link>Link</Tag>
      <Tag color=info>Info</Tag>
      <Tag color=success>Success</Tag>
      <Tag color=warning>Warning</Tag>
      <Tag color=danger>Danger</Tag>
    `))
  .add('sizes', () => render(
      `
      <Tag>Normal</Tag>
      <Tag size=medium>Medium</Tag>
      <Tag size=large>Large</Tag>
    `))
  .add('modifiers', () => render(
      `
      <Tag color=primary rounded>Medium</Tag>
      <Tag tag=a color=danger delete></Tag>
      `
    ))
  .add('list of tags', () => render(
      `
      <Tags>
        <Tag>One</Tag>
        <Tag>Two</Tag>
        <Tag>Three</Tag>
      </Tags>
      `
    ))
  .add('attach togather', () => render(
      `
      <Tags addons>
        <Tag color=black>npm</Tag>
        <Tag color=link>0.5.0</Tag>
      </Tags>
      <Tags addons>
        <Tag color=danger>Alex Smith</Tag>
        <Tag delete/>
      </Tags>
      `
    ))
