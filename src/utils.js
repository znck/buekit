/**
 * Wrap to array.
 * @param {*} any
 * @returns {Array}
 */
export function toArray(any) {
	return Array.isArray(any) ? any : (
    any === undefined ? [] : [any]
  )
}

const isDot = /\./
export function normalizeProps (
  props,
  resolve = (name, suffix, value) => value,
  transform = (name, value) => value
) {
  const keys = Object.keys(props)
  const base = keys.filter(key => !isDot.test(key))
  const others = keys.filter(key => isDot.test(key))
  const normalized = {}

  base.forEach(
    name => {
      const start = name.length + 1
      normalized[name] = props[name] !== undefined ? transform(name, props[name]) : props[name]
      others.forEach(
        key => {
          if (props[key] !== undefined && key.startsWith(name)) {
            normalized[name] = [
              ...toArray(normalized[name]),
              ...toArray(resolve(name, key.substr(start), props[key]))
            ]
          }
        }
      )
    }
  )

  return normalized
}

/**
 * Merge vue data for functional components.
 * @param {object} local
 * @param {object} parent
 * @returns {object}
 */
export function mergeData(...nodes) {
	const classes = nodes.reduce(
    (result, node) => node && node.class ? result.concat(toArray(node.class)) : result, []
  )

	return Object.assign(...nodes, {class: classes})
}

/**
 * Set value and return target back.
 * @param {object} target
 * @param {string|number} key
 * @param {*} value
 * @returns {objext}
 */
export function fluentSet(target, key, value = true) {
	target[key] = value

	return target
}

/**
 * Convert list of keys to a hash map.
 * @param {Array<string|number>} keys
 * @returns {Object<string, bool>}
 */
export function toMap(keys) {
	return keys.reduce((result, key) => fluentSet(result, key), {})
}

export const responsiveTypes = toMap(['mobile', 'tablet', 'desktop', 'widescreen', 'fullhd'])

/**
 * Verify type is one of responsive types.
 * @param {string} typeName
 * @returns {bool}
 */
export function isResponsiveType(typeName) {
	if (typeName.indexOf('-') > -1) {
		typeName = typeName.split('-').pop()
	}

	return typeName in responsiveTypes
}

/**
 * Valid value with given validator.
 * @param {*} value
 * @param {function} validator
 * @returns {bool}
 */
export function validate(value, validator) {
	return toArray(value).every(validator)
}

export function isNumber(any) {
	return typeof any === 'number'
}

export function isString(any) {
	return typeof any === 'string'
}

export function isBoolean(any) {
	return typeof any === 'boolean'
}

export function isUndefined(any) {
	return typeof any === 'undefined'
}

export function isFunction(any) {
	return typeof any === 'function'
}

export function styleResolver(any) {
	any = any || new Proxy({}, { get: (_, key) => key })

	return key => any[key]
}

export const cssModule = styleResolver

export function isIgnoredVnode(vnode) {
	return !vnode || !vnode.tag || (vnode.isComment && !vnode.asyncFactory)
}

export function addStyleToVnode(vnode, classes) {
	if (isIgnoredVnode(vnode)) {
		return vnode
	}

	if (!vnode.data) {
		vnode.data = {}
	}

	vnode.data.class = vnode.data.class ? toArray(vnode.data.class).concat(toArray(classes)) : toArray(classes)

	return vnode
}

import flatten from 'lodash/flatten'

export const colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark', 'light']

export function style(node, ...styles) {
  if (isIgnoredVnode(node)) return node

  node.data = {
    ...node.data,
    class: flatten([styles, toArray(node.data.class)]),
  }

  return node
}
