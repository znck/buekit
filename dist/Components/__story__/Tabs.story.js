import { storiesOf } from '@storybook/vue';
import Tabs from '../Tabs.vue';
import Icon from '../../Elements/Icon.vue';
var components = {
  Tabs: Tabs,
  Icon: Icon
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem\">" + template + "</div>",
    components: components
  };
}

storiesOf(Tabs.name, module).add('default', function () {
  return render("\n    Default\n    <Tabs :active=0>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Default Centered\n    <Tabs :active=0 centered>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Default Right\n    <Tabs :active=0 right>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    With Icons\n    <Tabs :active=0 centered>\n      <a>\n        <Icon><i class=\"fa fa-image\"></i></Icon>\n        Pictures\n      </a>\n      <a>\n        <Icon><i class=\"fa fa-music\"></i></Icon>\n        Music\n      </a>\n      <a>\n        <Icon><i class=\"fa fa-film\"></i></Icon>\n        Videos\n      </a>\n      <a>\n        <Icon><i class=\"fa fa-file-text-o\"></i></Icon>\n        Documents\n      </a>\n    </Tabs>\n    ");
}).add('sizes', function () {
  return render("\n    Small\n    <Tabs :active=0 size=small>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Default\n    <Tabs :active=0>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Medium\n    <Tabs :active=0 size=medium>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Large\n    <Tabs :active=0 size=large>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    With Icons\n    <Tabs :active=0 centered>\n      <a>\n        <Icon><i class=\"fa fa-image\"></i></Icon>\n        Pictures\n      </a>\n      <a>\n        <Icon><i class=\"fa fa-music\"></i></Icon>\n        Music\n      </a>\n      <a>\n        <Icon><i class=\"fa fa-film\"></i></Icon>\n        Videos\n      </a>\n      <a>\n        <Icon><i class=\"fa fa-file-text-o\"></i></Icon>\n        Documents\n      </a>\n    </Tabs>\n    ");
}).add('styles', function () {
  return render("\n    Boxed\n    <Tabs :active=0 type=boxed>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Toggle\n    <Tabs :active=0 type=toggle>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    \n    Fullwidth\n    <Tabs :active=0 type=fullwidth>\n      <a>Pictures</a>\n      <a>Music</a>\n      <a>Videos</a>\n      <a>Documents</a>\n    </Tabs>\n    ");
});