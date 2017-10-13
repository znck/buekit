import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Column from './Column.vue'

function snapshots (options) {
  options.forEach(
    option => it ('matches snapshot: ' + JSON.stringify(option), () => {
      const wrapper = shallow(Column, { props: option, slots: { default: '<p>content</p>' } })
      const renderer = createRenderer()
  
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })
  )
}

describe('Column.vue', () => {
  snapshots([
    {},
    { narrow: true },
    { narrowOnDevice: 'mobile' },
    { narrowOnDevice: ['mobile', 'desktop'] },
    { offset: 'half' },
    { offset: 2 },
    { size: 'half' },
    { size: 3 }
  ])
})
