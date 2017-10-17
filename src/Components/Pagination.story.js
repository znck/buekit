import { storiesOf } from '@storybook/vue'

import Pagination from './Pagination.vue'

import 'bulma'

const components = { Pagination }
function render (template) {
  return { template: `<div style="padding: 1.25rem">${template}</div>`, components }
}

storiesOf(Pagination.name, module)
  .add('default', () => render(
    `
     Default
     <Pagination :current=1 :total=10 :limit=5 />
     <Pagination :current=2 :total=10 :limit=5 />
     <Pagination :current=3 :total=10 :limit=5 />
     <Pagination :current=4 :total=10 :limit=5 />
     <Pagination :current=5 :total=10 :limit=5 />
     <Pagination :current=6 :total=10 :limit=5 />
     <Pagination :current=7 :total=10 :limit=5 />
     <Pagination :current=8 :total=10 :limit=5 />
     <Pagination :current=9 :total=10 :limit=5 />
     <Pagination :current=10 :total=10 :limit=5 />
     
     Centered
     <Pagination :current=1 :total=10 :limit=10 centered/>
     <Pagination :current=2 :total=10 :limit=10 centered/>
     <Pagination :current=3 :total=10 :limit=10 centered/>
     <Pagination :current=4 :total=10 :limit=10 centered/>
     <Pagination :current=5 :total=10 :limit=10 centered/>
     <Pagination :current=6 :total=10 :limit=10 centered/>
     <Pagination :current=7 :total=10 :limit=10 centered/>
     <Pagination :current=8 :total=10 :limit=10 centered/>
     <Pagination :current=9 :total=10 :limit=10 centered/>
     <Pagination :current=10 :total=10 :limit=10 centered/>
     
     Right
     <Pagination :current=1 :total=10 :limit=9 right/>
     <Pagination :current=2 :total=10 :limit=9 right/>
     <Pagination :current=3 :total=10 :limit=9 right/>
     <Pagination :current=4 :total=10 :limit=9 right/>
     <Pagination :current=5 :total=10 :limit=9 right/>
     <Pagination :current=6 :total=10 :limit=9 right/>
     <Pagination :current=7 :total=10 :limit=9 right/>
     <Pagination :current=8 :total=10 :limit=9 right/>
     <Pagination :current=9 :total=10 :limit=9 right/>
     <Pagination :current=10 :total=10 :limit=9 right/>
    `
  ))
  .add('sizes', () => render(
    `
    Small
    <Pagination :current=5 :total=10 :limit=10 size=small />
    Default
    <Pagination :current=5 :total=10 :limit=10 />
    Medium
    <Pagination :current=5 :total=10 :limit=10 size=medium />
    Large
    <Pagination :current=5 :total=10 :limit=10 size=large />
    `
  ))
