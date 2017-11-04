import * as Abstract from './Abstract'
import * as Columns from './Columns'
import * as Components from './Components'
import * as Elements from './Elements'
import * as Form from './Form'
import * as Layout from './Layout'

export * from './Abstract'
export * from './Columns'
export * from './Components'
export * from './Elements'
export * from './Form'
export * from './Layout'

export function register (Vue, components, prefix = 'B') {
  Object.entries(components).forEach(
    (name, component) => Vue.component(prefix + name, component)
  )
}

export default function BulmaVue (Vue, options) {
  const components = {
    ...Abstract,
    ...Columns,
    ...Components,
    ...Elements,
    ...Layout
  }

  register(Vue, components, (ptions && options.prefix) || 'B')
}
