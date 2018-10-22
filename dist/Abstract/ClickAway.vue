<script>
var ClickAway = function () {
  function ClickAway() {
    this.elements = Object.create(null);
  }

  var _proto = ClickAway.prototype;

  _proto.register = function register(el) {
    var _this = this;

    el.addEventListener('click', function (ev) {
      return _this.onClick(ev);
    });
  };

  _proto.watch = function watch(id, payload) {
    if (!(id in this.elements)) {
      this.elements[id] = payload;
    }
  };

  _proto.onClick = function onClick(ev) {
    var _this2 = this;

    Object.keys(this.elements).forEach(function (id) {
      var meta = _this2.elements[id];
      if (meta.el.contains(ev.target)) return;
      meta.handler();
      if (meta.once) _this2.unwatch(id);
    });
  };

  _proto.unwatch = function unwatch(id) {
    if (id in this.elements) delete this.elements[id];
  };

  return ClickAway;
}();

var registry = new ClickAway();

if (typeof document !== 'undefined') {
  registry.register(document);
}

export default {
  name: 'ClickAway',
  abstract: true,
  props: {
    multiple: {
      default: false,
      type: Boolean
    }
  },
  render: function render(h) {
    var children = this.$options._renderChildren;
    var vnode = children[0];

    if (this.$listeners.handle) {
      var meta = Object.create(null);
      meta.handler = this.$listeners.handle;
      meta.once = !this.$props.multiple;
      Object.defineProperty(meta, 'el', {
        get: function get() {
          return vnode.elm;
        }
      });
      registry.watch(this._uid, meta);
    } else registry.unwatch(this._uid);

    return vnode;
  },
  beforeDestroy: function beforeDestroy() {
    registry.unwatch(this._uid);
  }
};
</script>
