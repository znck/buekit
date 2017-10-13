import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Delete from './Delete.vue'

describe('Delete.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Delete, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
