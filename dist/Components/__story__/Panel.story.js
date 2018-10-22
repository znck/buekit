import { storiesOf } from '@storybook/vue';
import Active from '../../Abstract/Active.vue';
import Panel from '../Panel.vue';
import PanelBlock from '../PanelBlock.vue';
import 'bulma';
var components = {
  Active: Active,
  Panel: Panel,
  PanelBlock: PanelBlock
};

function render(template) {
  return {
    template: "<div style=\"padding: 1.25rem; width: 480px\">" + template + "</div>",
    components: components
  };
}

storiesOf(Panel.name, module).add('default', function () {
  return render("\n    Panel\n    <Panel title=repositories>\n      <PanelBlock>\n        <p class=\"control has-icons-left\">\n          <input class=\"input is-small\" type=\"text\" placeholder=\"search\">\n          <span class=\"icon is-small is-left\">\n            <i class=\"fa fa-search\"></i>\n          </span>\n        </p>\n      </PanelBlock>\n      <PanelBlock tabs tag=p>\n        <Active><a>all</a></Active>\n        <a>public</a>\n        <a>private</a>\n        <a>sources</a>\n        <a>forks</a>\n      </PanelBlock>\n      <Active>\n        <PanelBlock tag=a>\n          <PanelBlock icon>\n            <i class=\"fa fa-book\"></i>\n          </PanelBlock>\n          bulma\n        </PanelBlock>\n      </Active>\n      <PanelBlock tag=a>\n        <PanelBlock icon>\n          <i class=\"fa fa-book\"></i>\n        </PanelBlock>\n        marksheet\n      </PanelBlock>\n      <PanelBlock tag=a>\n        <PanelBlock icon>\n          <i class=\"fa fa-book\"></i>\n        </PanelBlock>\n        minireset.css\n      </PanelBlock>\n      <PanelBlock tag=a>\n        <PanelBlock icon>\n          <i class=\"fa fa-book\"></i>\n        </PanelBlock>\n        jgthms.github.io\n      </PanelBlock>\n      <PanelBlock tag=a>\n        <PanelBlock icon>\n          <i class=\"fa fa-code-fork\"></i>\n        </PanelBlock>\n        daniellowtw/infboard\n      </PanelBlock>\n      <PanelBlock tag=a>\n        <PanelBlock icon>\n          <i class=\"fa fa-code-fork\"></i>\n        </PanelBlock>\n        mojs\n      </PanelBlock>\n      <PanelBlock tag=label>\n        <input type=\"checkbox\">\n        remember me\n      </PanelBlock>\n      <PanelBlock>\n        <button class=\"button is-link is-outlined is-fullwidth\">\n          reset all filters\n        </button>\n      </PanelBlock>\n    </Panel>\n    ");
});