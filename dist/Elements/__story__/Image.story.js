import { storiesOf } from '@storybook/vue';
import xImage from '../Image.vue';
var components = {
  xImage: xImage
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(xImage.name, module).add('default', function () {
  return render("\n      <div style=\"padding: 1.25rem; width: 256px\">\n\n        <xImage size=128 src=\"http://bulma.io/images/placeholders/128x128.png\" /> <br>\n\n        <xImage size=128>\n          <img src=\"http://bulma.io/images/placeholders/128x128.png\">\n        </xImage> <br>\n\n        <xImage size=16 src=\"http://bulma.io/images/placeholders/16x16.png\" /> <br>\n        <xImage size=24 src=\"http://bulma.io/images/placeholders/24x24.png\" /> <br>\n        <xImage size=32 src=\"http://bulma.io/images/placeholders/32x32.png\" /> <br>\n        <xImage size=48 src=\"http://bulma.io/images/placeholders/48x48.png\" /> <br>\n        <xImage size=64 src=\"http://bulma.io/images/placeholders/64x64.png\" /> <br>\n        <xImage size=96 src=\"http://bulma.io/images/placeholders/96x96.png\" /> <br>\n        <xImage size=128 src=\"http://bulma.io/images/placeholders/128x128.png\" /> <br>\n\n        Retina <br>\n        <xImage size=128 src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n\n        Square <br>\n        <xImage width=256 ratio=square src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n        <xImage ratio=1by1 src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n        4 x 3 <br>\n        <xImage ratio=4by3 src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n        3 x 2 <br>\n        <xImage ratio=3by2 src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n        16 x 9 <br>\n        <xImage ratio=16by9 src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n        2 x 1 <br>\n        <xImage ratio=2by1 src=\"http://bulma.io/images/placeholders/256x256.png\" /> <br>\n\n      </div>\n    ");
});