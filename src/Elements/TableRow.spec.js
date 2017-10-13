import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import TableRow from './TableRow.vue'

describe('TableRow.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(TableRow, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
