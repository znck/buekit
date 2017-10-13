import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Progress from './Progress.vue'

describe('Progress.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Progress, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
