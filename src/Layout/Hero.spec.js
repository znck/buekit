import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'

import Hero from './Hero.vue'

function snapshots (options) {
  options.forEach(([props = {}, slots = {}]) =>
    it ('matches snapshot', () => {
      const wrapper = shallow(Hero, { props, slots})
      const renderer = createRenderer()
  
      renderer.renderToString(wrapper.vm, (err, str) => {
        if (err) throw new Error(err)
        expect(str).toMatchSnapshot()
      })
    })
  )
}

describe('Hero.vue', () => {
  snapshots ([
    [{ size: 'medium' }, { default: 'Content' }],
    [{ size: 'medium' }, { default: 'Content', head: 'Head' }],
    [{ size: 'medium' }, { default: 'Content', head: 'Head', foot: 'Hoot' }],
    [{ size: 'medium', bold: true }, { default: 'Content' }],
    [{ tag: 'article' }, { default: 'Content' }],
    [{ color: 'primary' }, { default: 'Content' }],
  ])
})
