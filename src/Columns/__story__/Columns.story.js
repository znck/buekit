import {storiesOf} from '@storybook/vue'

import Columns from './Columns.vue'
import Column from './Column.vue'

let i = 0
let wrap = 4
const components = {Columns, Column}
const colors = ['#209cee', '#23d160', '#ffdd57', '#ff3860']
const color = z => colors[typeof z === 'number' ? z % wrap : i++ % wrap]
const p = (content, c) => `<p style="padding: 1.25rem; background: ${color(c)}; color: white; text-align: center">${content}</p>`
const render = (template, limit = 4) => {
	i = 0
	wrap = limit

	return {template, components}
}

storiesOf(Columns.name, module)
  .add(
    'basic', () => render(
      `
      <Columns>
        <Column>${p('First Column')}</Column>
        <Column>${p('Second Column')}</Column>
        <Column>${p('Third Column')}</Column>
        <Column>${p('Fourth Column')}</Column>
      </Columns>
      `
    )
  )
  .add('sizes', () => render(
    `
    <div>
      <Columns>
        <Column size="three-quarters">${p('size: three-quarters')}</Column>
        <Column>${p('Auto')}</Column>
        <Column>${p('Auto')}</Column>
      </Columns>
      
      <Columns>
        <Column size="two-thirds">${p('size: two-thirds')}</Column>
        <Column>${p('Auto')}</Column>
        <Column>${p('Auto')}</Column>
      </Columns>
      
      <Columns>
        <Column size="half">${p('size: half')}</Column>
        <Column>${p('Auto')}</Column>
        <Column>${p('Auto')}</Column>
      </Columns>
      
      <Columns>
        <Column size="one-third">${p('size: one-third')}</Column>
        <Column>${p('Auto')}</Column>
        <Column>${p('Auto')}</Column>
      </Columns>
      
      <Columns>
        <Column size="one-quarter">${p('size: one-quarter')}</Column>
        <Column>${p('Auto')}</Column>
      </Columns>
    </div>
    `
  ))
  .add(
    '12 columns system', () => render(
      `
        <div>
          <Columns>
            <Column size=2>${p('size: 2', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
          </Columns>
          <Columns>
            <Column size=3>${p('size: 3', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
          </Columns>
          <Columns>
            <Column size=4>${p('size: 4', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
          </Columns>
          <Columns>
            <Column size=5>${p('size: 5', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
          </Columns>
          <Columns>
            <Column size=6>${p('size: 6', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
          </Columns>
          <Columns>
            <Column size=7>${p('size: 7', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
          </Columns>
          <Columns>
            <Column size=8>${p('size: 8', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
          </Columns>
          <Columns>
            <Column size=9>${p('size: 9', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
            <Column>${p(1, 1)}</Column>
          </Columns>
          <Columns>
            <Column size=10>${p('size: 10', 0)}</Column>
            <Column>${p(1, 1)}</Column>
            <Column>${p(1, 2)}</Column>
          </Columns>
          <Columns>
            <Column size=11>${p('size: 11', 0)}</Column>
            <Column>${p(1, 1)}</Column>
          </Columns>
        </div>
      `
    )
  )
  .add(
    'offset', () => render(
      `
        <div>
            <Columns device=mobile>
              <Column size=half offset=one-quarter>${p('size: half, offset: one-quter')}</Column>
            </Columns>
            
            <Columns device=mobile>
              <Column size=4 offset=8>${p('size: 4, offset: 8')}</Column>
            </Columns>
            
            <Columns device=mobile>
            <Column size=11 offset=1>${p('size: 11, offset: 1')}</Column>
            </Columns>
        </div>
      `
    )
  )
  .add(
    'narrow', () => render(
      `
      <Columns>
        <Column narrow>
          <div class="box" style="width: 200px;">
            ${p(`
            <span class="title is-5">Narrow column</span><br>
            <span class="subtitle">This column is only 200px wide.</span>
            `)}
          </div>
        </Column>
        <Column>
          <div class="box">
            ${p(`
            <span class="title is-5">Flexible column</span><br>
            <span class="subtitle">This column will take up the remaining space available.</span>
            `)}
          </div>
        </Column>
      </Columns>
      `
    )
  )
  .add(
    'responsiveness', () => render(
      `
      <div>
        <p>Mobile Columns</p>
        <Columns device=mobile>
          <Column>${p(1)}</Column>
          <Column>${p(2)}</Column>
          <Column>${p(3)}</Column>
          <Column>${p(4)}</Column>
        </Columns>

        <p>Desktop Columns</p>
        <Columns device=desktop>
          <Column>${p(1)}</Column>
          <Column>${p(2)}</Column>
          <Column>${p(3)}</Column>
          <Column>${p(4)}</Column>
        </Columns>

        <p>Different column sizes per breakpoint </p>
        <Columns>
          <Column :size="['three-quarters-mobile', 'two-third-tablet', 'half-desktop', 'one-third-widescreen', 'one-fourth-fullhd']">${p('mobile: three-quaters, tablet: two-thirds, desktop: half, widescreen: one-third, fullhd: one-fourth')}</Column>
          <Column>${p(2)}</Column>
          <Column>${p(3)}</Column>
          <Column>${p(4)}</Column>
        </Columns>
      </div>
      `
    )
  )
  .add(
    'nesting', () => render(
      `
      <Columns>
        <Column>
          ${p('First Column', 1)}
          <Columns>
            <Column>${p('First Nested', 4)}</Column>
            <Column>${p('Second Nested', 3)}</Column>
          </Columns>
        </Column>
        <Column>
          ${p('Second Column', 1)}
          <Columns>
            <Column size=half>${p('size: half', 4)}</Column>
            <Column>${p('auto', 3)}</Column>
            <Column>${p('auto', 3)}</Column>
          </Columns>
        </Column>
      </Columns>
      `
    )
  )
  .add(
    'gapless', () => render(
      `
      <div>
        <p>Default Gap</p>
        <Columns :gap=false>
          <Column>${p('First Column')}</Column>
          <Column>${p('Second Column')}</Column>
          <Column>${p('Third Column')}</Column>
          <Column>${p('Fourth Column')}</Column>
        </Columns>

        <p>Multiline Columns</p>
        <Columns :gap=false multiline>
          <Column size=3>${p('1st Column')}</Column>
          <Column size=3>${p('2nd Column')}</Column>
          <Column size=3>${p('3rd Column')}</Column>
          <Column size=3>${p('4th Column')}</Column>
          <Column size=half>${p('5th Column')}</Column>
          <Column size=3>${p('6th Column')}</Column>
          <Column size=3>${p('7th Column')}</Column>
          <Column size=one-quarter>${p('8th Column')}</Column>
          <Column>${p('9th Column')}</Column>
        </Columns>

        <p>Custom Gap</p>
        <Columns gap=8>
          <Column size=one-third>${p('Side')}</Column>
          <Column>${p('Main')}</Column>
        </Columns>
        <Columns gap=3>
          <Column size=one-third>${p('Default Gap')}</Column>
          <Column size=one-third>${p('Default Gap')}</Column>
          <Column size=one-third>${p('Default Gap')}</Column>
        </Columns>
        <Columns gap=0>
          <Column>${p('Zero Gap')}</Column>
          <Column>${p('zero Gap')}</Column>
        </Columns>
      </div>
    `
    )
  )
  .add(
    'multiline', () => render(
      `
      <Columns multiline>
        <Column size=3>${p('1st Column')}</Column>
        <Column size=3>${p('2nd Column')}</Column>
        <Column size=3>${p('3rd Column')}</Column>
        <Column size=3>${p('4th Column')}</Column>
        <Column size=half>${p('5th Column')}</Column>
        <Column size=3>${p('6th Column')}</Column>
        <Column size=3>${p('7th Column')}</Column>
        <Column size=one-quarter>${p('8th Column')}</Column>
        <Column>${p('9th Column')}</Column>
      </Columns>
      `
    )
  )
  .add(
    'centered', () => render(
      `
      <div>
        <p>Centered</p>
        <Columns centered>
          <Column narrow>${p('Centered Column')}</Column>
        </Columns>
        
        <p>Centered & Multiline</p>
        <Columns centered multiline>
          <Column narrow>${p('Centered Column')}</Column>
          <Column narrow>${p('Centered Column')}</Column>
          <Column narrow>${p('Centered Column')}</Column>
          <Column narrow>${p('Centered Column')}</Column>
          <Column narrow>${p('Centered Column')}</Column>
          <Column narrow>${p('Centered Column')}</Column>
          <Column narrow>${p('Centered Column')}</Column>
        </Columns>

        <p>Vertically Centered</p><br>
        <Columns centered=vertically style="height: 250px; background: #ccc">
          <Column narrow>${p('Centered Column')}</Column>
        </Columns>

        <p>Vertically & Horizontally Centered</p><br>
        <Columns centered=both style="height: 250px; background: #ccc">
          <Column narrow>${p('Centered Column')}</Column>
        </Columns>
      </div>
      `
    )
  )
