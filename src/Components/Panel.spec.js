import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Panel from './Panel.vue'

describe('Panel.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Panel, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
