import { storiesOf } from '@storybook/vue';
import Modal from '../Modal.vue';
import xButton from '../../Elements/Button.vue';
import Box from '../../Elements/Box.vue';
import xContent from '../../Elements/Content.vue';
import Media from '../../Layout/Media.vue';
import Level from '../../Layout/Level.vue';
import xImage from '../../Elements/Image.vue';
import Icon from '../../Elements/Icon.vue';
import 'bulma';
var components = {
  Modal: Modal,
  xButton: xButton,
  Media: Media,
  xImage: xImage,
  Box: Box,
  xContent: xContent,
  Level: Level,
  Icon: Icon
};

function render(template) {
  return {
    data: function data() {
      return {
        open: false
      };
    },
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Modal.name, module).add('default', function () {
  return render("\n     <xButton @click=\"open = true\">Launch example modal</xButton>\n     <Modal :open=open @close=\"open = false\">\n      <Box>\n        <Media>\n          <xImage slot=left size=64 src=\"http://bulma.io/images/placeholders/128x128.png\" alt=\"Image\"/>\n          <xContent>\n            <p>\n              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>\n              <br>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.\n            </p>\n        </xContent>\n        <Level tag=nav>\n          <Level left>\n            <Level tag=a item>\n              <Icon size=small><i class=\"fa fa-reply\"></i></Icon>\n            </Level>\n            <Level tag=a item>\n              <Icon size=small><i class=\"fa fa-retweet\"></i></Icon>\n            </Level>\n            <Level tag=a item>\n              <Icon size=small><i class=\"fa fa-heart\"></i></Icon>\n            </Level>\n          </Level>\n        </Level>\n        </Media>\n      </Box>\n     </Modal>\n    ");
}).add('image', function () {
  return render("\n     <xButton @click=\"open = true\">Launch example modal</xButton>\n     <Modal :open=open @close=\"open = false\">\n      <xImage slot=left ratio=4by3 src=\"http://bulma.io/images/placeholders/1280x960.png\" alt=\"Image\"/>\n     </Modal>\n    ");
}).add('classic', function () {
  return render("\n     <xButton @click=\"open = true\">Launch example modal</xButton>\n     <Modal :open=open @close=\"open = false\" classic title=\"Modal title\">\n      <xContent>\n        <h1>Hello World</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>\n        <h2>Second level</h2>\n        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>\n        <ul>\n          <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n          <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n          <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>\n          <li>Ut non enim metus.</li>\n        </ul>\n        <h3>Third level</h3>\n        <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href=\"#\">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n          <li>Donec a diam tellus.</li>\n          <li>Aenean nec tortor orci.</li>\n          <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n          <li>Vivamus maximus ultricies pulvinar.</li>\n        </ol>\n        <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>\n        <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>\n        <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>\n        <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>\n        <h4>Fourth level</h4>\n        <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>\n        <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>\n        <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>\n        <h5>Fifth level</h5>\n        <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>\n        <h6>Sixth level</h6>\n        <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>\n      </xContent>\n      \n      <template slot=links>\n        <button class=\"is-success\">Save changes</button>\n        <button>Cancel</button>\n      </template>\n     </Modal>\n    ");
});