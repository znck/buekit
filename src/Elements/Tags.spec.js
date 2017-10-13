import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Tags from './Tags.vue'

describe('Tags.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Tags, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
