import { storiesOf } from '@storybook/vue';
import Tile from '../Tile.vue';
var components = {
  Tile: Tile
};

function render(template) {
  return {
    template: template,
    components: components
  };
}

storiesOf(Tile.name, module).add('default', function () {
  return render("\n    <Tile ancestor>\n      <Tile vertical size=8>\n        <Tile>\n          <Tile parent vertical>\n            <Tile tag=article child class=\"notification is-primary\">\n                <p class=\"title\">Vertical...</p>\n                <p class=\"subtitle\">Top tile</p>\n            </Tile>\n            <Tile tag=article child class=\"notification is-warning\">\n                <p class=\"title\">...tiles</p>\n                <p class=\"subtitle\">Bottom tile</p>\n            </Tile>\n          </Tile>\n          <Tile parent>\n            <Tile child class=\"notification is-info\">\n                <p class=\"title\">Middle tile</p>\n                <p class=\"subtitle\">With an image</p>\n                <figure class=\"image is-4by3\">\n                  <img src=\"http://bulma.io/images/placeholders/640x480.png\">\n                </figure>\n            </Tile>\n          </Tile>\n        </Tile>\n        <Tile parent>\n          <Tile tag=article child class=\"notification is-danger\">\n              <p class=\"title\">Wide tile</p>\n              <p class=\"subtitle\">Aligned with the right tile</p>\n              <div class=\"content\">\n                <!-- Content -->\n              </div>\n          </Tile>\n        </Tile>\n      </Tile>\n      <Tile parent>\n        <Tile tag=article child class=\"notification is-success\">\n            <div class=\"content\">\n              <p class=\"title\">Tall tile</p>\n              <p class=\"subtitle\">With even more content</p>\n              <div class=\"content\">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.\n\n                Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.\n\n                Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.\n              </div>\n            </div>\n        </Tile>\n      </Tile>\n    </Tile>\n    ");
});