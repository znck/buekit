import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Breadcrumb from './Breadcrumb.vue'

import { $style } from '../utils'

Breadcrumb.$style = $style

describe('Breadcrumb.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Breadcrumb, { context: { props: {} } })
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
