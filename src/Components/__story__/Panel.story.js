import {storiesOf} from '@storybook/vue'

import Active from '../../Abstract/Active.vue'
import Panel from '../Panel.vue'
import PanelBlock from '../PanelBlock.vue'

import 'bulma'

const components = {Active, Panel, PanelBlock}
function render(template) {
	return {template: `<div style="padding: 1.25rem; width: 480px">${template}</div>`, components}
}

storiesOf(Panel.name, module)
  .add('default', () => render(
    `
    Panel
    <Panel title=repositories>
      <PanelBlock>
        <p class="control has-icons-left">
          <input class="input is-small" type="text" placeholder="search">
          <span class="icon is-small is-left">
            <i class="fa fa-search"></i>
          </span>
        </p>
      </PanelBlock>
      <PanelBlock tabs tag=p>
        <Active><a>all</a></Active>
        <a>public</a>
        <a>private</a>
        <a>sources</a>
        <a>forks</a>
      </PanelBlock>
      <Active>
        <PanelBlock tag=a>
          <PanelBlock icon>
            <i class="fa fa-book"></i>
          </PanelBlock>
          bulma
        </PanelBlock>
      </Active>
      <PanelBlock tag=a>
        <PanelBlock icon>
          <i class="fa fa-book"></i>
        </PanelBlock>
        marksheet
      </PanelBlock>
      <PanelBlock tag=a>
        <PanelBlock icon>
          <i class="fa fa-book"></i>
        </PanelBlock>
        minireset.css
      </PanelBlock>
      <PanelBlock tag=a>
        <PanelBlock icon>
          <i class="fa fa-book"></i>
        </PanelBlock>
        jgthms.github.io
      </PanelBlock>
      <PanelBlock tag=a>
        <PanelBlock icon>
          <i class="fa fa-code-fork"></i>
        </PanelBlock>
        daniellowtw/infboard
      </PanelBlock>
      <PanelBlock tag=a>
        <PanelBlock icon>
          <i class="fa fa-code-fork"></i>
        </PanelBlock>
        mojs
      </PanelBlock>
      <PanelBlock tag=label>
        <input type="checkbox">
        remember me
      </PanelBlock>
      <PanelBlock>
        <button class="button is-link is-outlined is-fullwidth">
          reset all filters
        </button>
      </PanelBlock>
    </Panel>
    `
  ))
