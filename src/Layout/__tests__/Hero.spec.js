import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Hero from '../Hero.vue'

function snapshots(options) {
	options.forEach(([props = {}, slots = {}]) =>
    it('matches snapshot', () => {
	const wrapper = shallow(Hero, {props, slots})
	const renderer = createRenderer()

	renderer.renderToString(wrapper.vm, (err, str) => {
		if (err) {
			throw new Error(err)
		}
		expect(str).toMatchSnapshot()
	})
})
  )
}

describe('Hero.vue', () => {
	snapshots([
    [{size: 'medium'}, {default: '<p>Content</p>'}],
    [{size: 'medium'}, {default: '<p>Content</p>', head: '<p>Head</p>'}],
    [{size: 'medium'}, {default: '<p>Content</p>', head: '<p>Head</p>', foot: '<p>Hoot</p>'}],
    [{size: 'medium', bold: true}, {default: '<p>Content</p>'}],
    [{tag: 'article'}, {default: '<p>Content</p>'}],
    [{color: 'primary'}, {default: '<p>Content</p>'}]
	])
})
