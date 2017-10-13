import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Columns from './Columns.vue'

function snapshots (options) {
  options.forEach(
    option => it ('matches snapshot: ' + JSON.stringify(option), () => {
      const wrapper = shallow(Columns, { props: option, slots: { default: '<p>content</p>' } })
      const renderer = createRenderer()
  
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })
  )
}

describe('Columns.vue', () => {
  snapshots ([
    {},
    { centered: true },
    { centered: 'vertically' },
    { gap: false },
    { gap: 8 },
    { multiline: true }
  ])
})
