import {shallow} from 'vue-test-utils'
import {createRenderer} from 'vue-server-renderer'

import Media from './Media.vue'

function snapshots(options) {
	options.forEach(([props = {}, slots = {}] = []) => {
		it('matches snapshot', () => {
			const wrapper = shallow(Media, { context: {props}, slots })
			const renderer = createRenderer()

			renderer.renderToString(wrapper.vm, (err, str) => {
				if (err) {
					throw new Error(err)
				}
				expect(str).toMatchSnapshot()
			})
		})
	})
}

describe('Media.vue', () => {
	snapshots([
    [{tag: 'article'}, {default: '<p>Content</p>'}],
    [{tag: 'article'}, {default: '<p>Content</p>', left: '<img />'}],
    [{tag: 'article'}, {default: '<p>Content</p>', left: '<img />', right: '<button />'}]
	])
})
