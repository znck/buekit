import Vue from 'vue'
import { configure } from '@storybook/vue'

Vue.config.productionTip = false

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

function loadStories() {
  requireAll(require.context('../src', true, /\.story\.js$/))
}

configure(loadStories, module)
