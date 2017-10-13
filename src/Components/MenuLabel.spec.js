import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import MenuLabel from './MenuLabel.vue'

describe('MenuLabel.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(MenuLabel, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
