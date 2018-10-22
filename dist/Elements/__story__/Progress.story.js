import { storiesOf } from '@storybook/vue';
import xProgress from '../Progress.vue';
var components = {
  xProgress: xProgress
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(xProgress.name, module).add('default', function () {
  return render("\n     <div style=\"padding: 1.25rem\">\n      <xProgress :value=5 />\n\n      Colors <br>\n      <xProgress color=primary :value=15 />\n      <xProgress color=info :value=30 />\n      <xProgress color=link :value=45 />\n      <xProgress color=success :value=60 />\n      <xProgress color=warning :value=75 />\n      <xProgress color=danger :value=90 />\n\n      Sizes <br>\n      <xProgress size=small :value=75 />\n      <xProgress :value=60 />\n      <xProgress size=medium :value=45 />\n      <xProgress size=large :value=30 />\n     </div>\n    ");
});