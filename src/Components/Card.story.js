import { storiesOf } from '@storybook/vue'

import Card from './Card.vue'
import xImage from '../Elements/Image.vue'
import Media from '../Layout/Media.vue'
import Icon from '../Elements/Icon.vue'
import Subtitle from '../Elements/Subtitle.vue'
import xContent from '../Elements/Content.vue'
import xTitle from '../Elements/Title.vue'

const components = { Card, xImage, Media, Icon, Subtitle, xTitle, xContent }
function render (template) {
  return { template: `<div style="padding: 1.25rem; width: 400px">${template}</div>`, components }
}

storiesOf(Card.name, module)
  .add('default', () => render(
    `
    <Card>
      <xImage ratio=4by3 slot=image src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
      
      <Media>
        <xImage size=48 slot=left src="http://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>

        <xTitle level=4>John Smith</xTitle>
        <Subtitle level=6>@johnsmith</Subtitle>
      </Media>

      <xContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </xContent>
    </Card>
    `
  ))
  .add('header & footer', () => render(
    `
    <Card title=Component>
      <a href="#" aria-label="more options" slot=icon>
        <Icon>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </Icon>
      </a>
      
      <xContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </xContent>
      
      <template slot=links>
        <a href="#">Save</a>
        <a href="#">Edit</a>
        <a href="#">Delete</a>
      </template>
    </Card>
    `
  ))
  .add('with links', () => render(
    `
    <Card>
      <xTitle tag=p>
        “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
      </xTitle>
      <Subtitle tag=p>
        Jeff Atwood
      </Subtitle>
      
      <template slot=links>
        <p>
          <span>
            View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
          </span>
        </p>
        <p>
          <span>
            Share on <a href="#">Facebook</a>
          </span>
        </p>
      </template>
    </Card>
    `
  ))
