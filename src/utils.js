import { flatten, assign } from 'lodash'

export function toObject(any) {
	return (any === null || typeof any !== 'object') ? {} : any
}

export function toArray(any) {
	return Array.isArray(any) ? any : (
    any === undefined ? [] : [any]
  )
}

export function style(node, ...styles) {
  if (isIgnoredVnode(node)) return node

  node.data = assign(
    {},
    node.data,
    {class: flatten([styles, toArray(node.data.class)])}
  )

  return node
}

export function styleResolver(any) {
	any = any || new Proxy({}, { get: (_, key) => key })

	return key => any[key]
}

export function isIgnoredVnode(vnode) {
	return !vnode || !vnode.tag || (vnode.isComment && !vnode.asyncFactory)
}

export function call(cbs, ...args) {
  flatten(toArray(cbs)).forEach(cb => setTimeout(() => cb(...args)))
}
