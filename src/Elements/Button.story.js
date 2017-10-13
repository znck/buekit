import { storiesOf } from '@storybook/vue'

import xButton from './Button.vue'

const components = { xButton }

function render (template) {
  return { template, components }
}

storiesOf(xButton.name, module)
  .add('default', () => render(
    `
     <div>
      <xButton>Button</xButton>
      <xButton tag=a>Anchor</xButton>
      <xButton tag=input type="submit" value="Submit input" />
      <xButton tag=input type="reset" value="Reset input" />

      <br><br>

      <xButton color=white>White</xButton>
      <xButton color=light>Light</xButton>
      <xButton color=dark>Dark</xButton>
      <xButton color=black>Black</xButton>
      <xButton color=text>Text</xButton>

      <br><br>

      <xButton color=primary>Primary</xButton>
      <xButton color=link>Link</xButton>
      <xButton color=info>Info</xButton>
      <xButton color=success>Success</xButton>
      <xButton color=warning>Warning</xButton>
      <xButton color=danger>Danger</xButton>

      <br><br>

      <xButton size=small>Small</xButton>
      <xButton>Normal</xButton>
      <xButton size=medium>Medium</xButton>
      <xButton size=large>Large</xButton>

      <br><br>

      <xButton outlined>Outlined</xButton>
      <xButton color=primary outlined>Outlined</xButton>
      <xButton color=link outlined>Outlined</xButton>
      <xButton color=info outlined>Outlined</xButton>
      <xButton color=success outlined>Outlined</xButton>
      <xButton color=danger outlined>Outlined</xButton>

      <br></br>

      <div style="padding: 1.25rem; background: #00d1b2">
        <xButton inverted>Inverted</xButton>
        <xButton color=primary inverted>Inverted</xButton>
        <xButton color=link inverted>Inverted</xButton>
        <xButton color=info inverted>Inverted</xButton>
        <xButton color=success inverted>Inverted</xButton>
        <xButton color=danger inverted>Inverted</xButton>
      </div>

      <br></br>

      <div style="padding: 1.25rem; background: #00d1b2">
        <xButton color=primary inverted outlined>Invert Outlined</xButton>
        <xButton color=link inverted outlined>Invert Outlined</xButton>
        <xButton color=info inverted outlined>Invert Outlined</xButton>
        <xButton color=success inverted outlined>Invert Outlined</xButton>
        <xButton color=danger inverted outlined>Invert Outlined</xButton>
      </div>

      <br></br>
      
      <xButton focused>Focused</xButton>
      <xButton color=primary focused>Focused</xButton>
      <xButton color=link focused>Focused</xButton>
      <xButton color=info focused>Focused</xButton>
      <xButton color=success focused>Focused</xButton>
      <xButton color=danger focused>Focused</xButton>

      <br></br>
      
      <xButton active>Active</xButton>
      <xButton color=primary active>Active</xButton>
      <xButton color=link active>Active</xButton>
      <xButton color=info active>Active</xButton>
      <xButton color=success active>Active</xButton>
      <xButton color=danger active>Active</xButton>

      <br></br>
      
      <xButton hovered>Hovered</xButton>
      <xButton color=primary hovered>Hovered</xButton>
      <xButton color=link hovered>Hovered</xButton>
      <xButton color=info hovered>Hovered</xButton>
      <xButton color=success hovered>Hovered</xButton>
      <xButton color=danger hovered>Hovered</xButton>

      <br></br>
      
      <xButton loading>Loading</xButton>
      <xButton color=primary loading>Loading</xButton>
      <xButton color=link loading>Loading</xButton>
      <xButton color=info loading>Loading</xButton>
      <xButton color=success loading>Loading</xButton>
      <xButton color=danger loading>Loading</xButton>

      <br></br>
      
      <xButton disabled>Disabled</xButton>
      <xButton color=primary disabled>Disabled</xButton>
      <xButton color=link disabled>Disabled</xButton>
      <xButton color=info disabled>Disabled</xButton>
      <xButton color=success disabled>Disabled</xButton>
      <xButton color=danger disabled>Disabled</xButton>

      <br><br>

      <xButton static>Static</xButton>
     </div>
    `
  ))
