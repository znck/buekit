import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Section from './Section.vue'

describe('Section.vue', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(Section, { context: { props: {} } })
		const renderer = createRenderer()

		renderer.renderToString(wrapper.vm, (err, str) => {
			if (err) {
				throw new Error(err)
			}
			expect(str).toMatchSnapshot()
		})
	})
})
