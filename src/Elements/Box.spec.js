import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Box from './Box.vue'

describe('Box.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Box, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
