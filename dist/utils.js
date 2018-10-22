import { flatten, assign, isObject } from 'lodash-es';
export function toObject(any) {
  return any === null || isObject(any) ? {} : any;
}
export function toArray(any) {
  return Array.isArray(any) ? any : any === undefined ? [] : [any];
}
export function style(node) {
  if (isIgnoredVnode(node)) return node;

  for (var _len = arguments.length, styles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  node.data = assign({}, node.data, {
    class: flatten([styles, toArray(node.data.class)])
  });
  return node;
}
export function styleResolver(any) {
  any = any || new Proxy({}, {
    get: function get(_, key) {
      return key;
    }
  });
  return function (key) {
    return any[key];
  };
}
export function isIgnoredVnode(vnode) {
  return !vnode || !vnode.tag || vnode.isComment && !vnode.asyncFactory;
}
export function call(cbs) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  flatten(toArray(cbs)).forEach(function (cb) {
    return setTimeout(function () {
      return cb.apply(void 0, args);
    });
  });
}