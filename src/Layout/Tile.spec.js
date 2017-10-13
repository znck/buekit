import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Tile from './Tile.vue'

describe('Tile.vue', () => {
  it ('matches snapshot', () => {
    const wrapper = shallow(Tile, {})
    const renderer = createRenderer()

    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})
