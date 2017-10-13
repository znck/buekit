<script>

class ClickAway {
  constructor () {
    this.elements = Object.create(null)
  }

  register (el) {
    el.addEventListener('click', ev => this.onClick(ev))
  }

  watch (id, payload) {
    if (!(id in this.elements)) {
      this.elements[id] = payload
    }
  }

  onClick (ev) {
    Object.keys(this.elements)
      .forEach(id => {
        const meta = this.elements[id]

        if (meta.el.contains(ev.target)) return
        
        meta.handler()

        if (meta.once) this.unwatch(id)
      })
  }

  unwatch (id) {
    if (id in this.elements) delete this.elements[id]
  }
}

const registry = new ClickAway()
if (typeof document !== 'undefined') {
 registry.register(document)
}

export default {
  name: 'ClickAway',
  abstract: true,
  props: {
    multiple: { default: false, type: Boolean }
  },
  render (h) {
    const children = this.$options._renderChildren
    const vnode = children[0]
    

    if (this.$listeners.handle) {
      const meta = Object.create(null)

      meta.handler = this.$listeners.handle
      meta.once = !this.$props.multiple
      Object.defineProperty(meta, 'el', { get: () => vnode.elm })
      
      registry.watch(this._uid, meta)
    } else registry.unwatch(this._uid)

    return vnode
  },
  beforeDestroy () {
    registry.unwatch(this._uid)
  }
}
</script>
