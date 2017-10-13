import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Menu from './Menu.vue'

describe('Menu.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Menu, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
