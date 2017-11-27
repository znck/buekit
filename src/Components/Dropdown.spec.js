import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Dropdown from './Dropdown.vue'

import { $style } from '../utils'

Dropdown.$style = $style

describe('Dropdown.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Dropdown, {})
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
