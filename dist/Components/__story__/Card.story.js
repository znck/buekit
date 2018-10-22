import { storiesOf } from '@storybook/vue';
import Card from '../Card.vue';
import xImage from '../../Elements/Image.vue';
import Media from '../../Layout/Media.vue';
import Icon from '../../Elements/Icon.vue';
import Subtitle from '../../Elements/Subtitle.vue';
import xContent from '../../Elements/Content.vue';
import xTitle from '../../Elements/Title.vue';
var components = {
  Card: Card,
  xImage: xImage,
  Media: Media,
  Icon: Icon,
  Subtitle: Subtitle,
  xTitle: xTitle,
  xContent: xContent
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem; width: 400px\">" + template + "</div>",
    components: components
  };
}

storiesOf(Card.name, module).add('default', function () {
  return render("\n    <Card>\n      <xImage ratio=4by3 slot=image src=\"http://bulma.io/images/placeholders/1280x960.png\" alt=\"Placeholder image\"/>\n      \n      <Media>\n        <xImage size=48 slot=left src=\"http://bulma.io/images/placeholders/96x96.png\" alt=\"Placeholder image\"/>\n\n        <xTitle level=4>John Smith</xTitle>\n        <Subtitle level=6>@johnsmith</Subtitle>\n      </Media>\n\n      <xContent>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\n        <a href=\"#\">#css</a> <a href=\"#\">#responsive</a>\n        <br>\n        <time datetime=\"2016-1-1\">11:09 PM - 1 Jan 2016</time>\n      </xContent>\n    </Card>\n    ");
}).add('header & footer', function () {
  return render("\n    <Card title=Component>\n      <a href=\"#\" aria-label=\"more options\" slot=icon>\n        <Icon>\n          <i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n        </Icon>\n      </a>\n      \n      <xContent>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n        <a href=\"#\">@bulmaio</a>. <a href=\"#\">#css</a> <a href=\"#\">#responsive</a>\n        <br>\n        <time datetime=\"2016-1-1\">11:09 PM - 1 Jan 2016</time>\n      </xContent>\n      \n      <template slot=links>\n        <a href=\"#\">Save</a>\n        <a href=\"#\">Edit</a>\n        <a href=\"#\">Delete</a>\n      </template>\n    </Card>\n    ");
}).add('with links', function () {
  return render("\n    <Card>\n      <xTitle tag=p>\n        \u201CThere are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.\u201D\n      </xTitle>\n      <Subtitle tag=p>\n        Jeff Atwood\n      </Subtitle>\n      \n      <template slot=links>\n        <p>\n          <span>\n            View on <a href=\"https://twitter.com/codinghorror/status/506010907021828096\">Twitter</a>\n          </span>\n        </p>\n        <p>\n          <span>\n            Share on <a href=\"#\">Facebook</a>\n          </span>\n        </p>\n      </template>\n    </Card>\n    ");
});