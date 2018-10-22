<script>
import { style, styleResolver } from '../utils';
import PropTypes from '@znck/prop-types';
export default {
  name: 'Media',
  functional: true,
  props: {
    tag: PropTypes.string.value('div')
  },
  render: function render(h, ctx) {
    var s = styleResolver(ctx.$style);
    var tag = ctx.props.tag;
    var classes = [s('media')];
    var slots = ctx.slots();
    return style(h(tag, ctx.data, [slots.left && slots.left.length && h('figure', {
      class: s('media-left')
    }, slots.left), h('div', {
      class: s('media-content')
    }, slots.default), slots.right && slots.right.length && h('div', {
      class: s('media-right')
    }, slots.right)].filter(function (el) {
      return el;
    })), classes);
  }
};
</script>

<style module>
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

* {
  box-sizing: inherit;
}

*:before, *:after {
  box-sizing: inherit;
}

.media {
  align-items: flex-start;
  display: flex;
  text-align: left;
}

.media .content:not(:last-child) {
  margin-bottom: 0.75rem;
}

.media .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  display: flex;
  padding-top: 0.75rem;
}

.media .media .content:not(:last-child),
.media .media .control:not(:last-child) {
  margin-bottom: 0.5rem;
}

.media .media .media {
  padding-top: 0.5rem;
}

.media .media .media + .media {
  margin-top: 0.5rem;
}

.media + .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  margin-top: 1rem;
  padding-top: 1rem;
}

.media.is-large + .media {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
}

.media-left,
.media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.media-left {
  margin-right: 1rem;
}

.media-right {
  margin-left: 1rem;
}

.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  text-align: left;
}
</style>
