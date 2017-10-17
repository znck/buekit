import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Field from './Field.vue'

describe('Field.vue', () => {

  it ('matches snapshot', () => {
    const wrapper = shallow(Field, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
