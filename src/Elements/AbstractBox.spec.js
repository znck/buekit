import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import AbstractBox from './AbstractBox.vue'

describe('AbstractBox.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(AbstractBox, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
