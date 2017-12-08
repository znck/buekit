import {each, assign} from 'lodash'

import * as Abstract from './Abstract'
import * as Columns from './Columns'
import * as Components from './Components'
import * as Elements from './Elements'
import * as Form from './Form'
import * as Layout from './Layout'
import * as Modifiers from './Modifiers'

export * from './Abstract'
export * from './Columns'
export * from './Components'
export * from './Elements'
export * from './Form'
export * from './Layout'
export * from './Modifiers'

function register(Vue, components, prefix) {
	each(components, (component, name) => Vue.component(prefix + name, component))
}

export default function BulmaVue(Vue, options) {
	const components = assign(
    {},
		Abstract,
		Columns,
		Components,
		Elements,
		Form,
		Layout,
		Modifiers
  )

	register(Vue, components, (options && options.prefix) || 'Bu')
}
