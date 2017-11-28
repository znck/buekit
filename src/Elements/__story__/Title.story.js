import {storiesOf} from '@storybook/vue'

import Subtitle from './Subtitle.vue'
import Title from './Title.vue'

const components = {Subtitle, Title}
function render(template) {
	return {template: `<div style="padding: 1.25rem">${template}</div>`, components}
}

storiesOf(Title.name, module)
  .add('default', () => render(
    `
     <Title>Title</Title>
     <Subtitle>Subtitle</Subtitle>
    `
  ))
  .add('levels/sizes', () => render(
    `
     <Title level=1>Title 1</Title>
     <Title level=2>Title 2</Title>
     <Title level=3>Title 3 (default)</Title>
     <Title level=4>Title 4</Title>
     <Title level=5>Title 5</Title>
     <Title level=6>Title 6</Title>
     
     <Subtitle level=1>Subtitle 1</Subtitle>
     <Subtitle level=2>Subtitle 2</Subtitle>
     <Subtitle level=3>Subtitle 3 (default)</Subtitle>
     <Subtitle level=4>Subtitle 4</Subtitle>
     <Subtitle level=5>Subtitle 5</Subtitle>
     <Subtitle level=6>Subtitle 6</Subtitle>
    `
  ))
  .add('combining', () => render(
    `
     <Title level=1>Title 1</Title>
     <Subtitle level=3>Subtitle 3</Subtitle>

     <br><br>

     <Title level=2>Title 2</Title>
     <Subtitle level=4>Subtitle 4</Subtitle>
     
     <br><br>
     
     <Title level=3>Title 3</Title> 
     <Subtitle level=5>Subtitle 5</Subtitle>
    `
  ))
  .add('spaced', () => render(
    `
     <Title level=1 spaced>Title 1</Title>
     <Subtitle level=3>Subtitle 3</Subtitle>

     <br><br>

     <Title level=2 spaced>Title 2</Title>
     <Subtitle level=4>Subtitle 4</Subtitle>
     
     <br><br>
     
     <Title level=3 spaced>Title 3</Title> 
     <Subtitle level=5>Subtitle 5</Subtitle>
    `
  ))
