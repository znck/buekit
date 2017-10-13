import { storiesOf } from '@storybook/vue'

import xProgress from './Progress.vue'

const components = { xProgress }
function render (template) {
  return { template, components }
}

storiesOf(xProgress.name, module)
  .add('default', () => render(
    `
     <div style="padding: 1.25rem">
      <xProgress :value=5 />

      Colors <br>
      <xProgress color=primary :value=15 />
      <xProgress color=info :value=30 />
      <xProgress color=link :value=45 />
      <xProgress color=success :value=60 />
      <xProgress color=warning :value=75 />
      <xProgress color=danger :value=90 />

      Sizes <br>
      <xProgress size=small :value=75 />
      <xProgress :value=60 />
      <xProgress size=medium :value=45 />
      <xProgress size=large :value=30 />
     </div>
    `
  ))
