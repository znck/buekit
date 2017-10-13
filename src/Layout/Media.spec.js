import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Media from './Media.vue'

function snapshots (options) {
  options.forEach(([props = {} , slots = {} ] = []) => {
    it ('matches snapshot', () => {
      const wrapper = shallow(Media, { props, slots })
      const renderer = createRenderer()
  
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })
  })
}

describe('Media.vue', () => {
  snapshots ([
    [{ tag: 'article' }, { default: 'Content' }],
    [{ tag: 'article' }, { default: 'Content', left: 'Image' }],
    [{ tag: 'article' }, { default: 'Content', left: 'Image', right: 'Action' }]
  ])
})
