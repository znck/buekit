import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Card from './Card.vue'

import { $style } from '../utils'

Card.$style = $style

describe('Card.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Card, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
