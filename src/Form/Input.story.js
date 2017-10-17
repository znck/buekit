import { storiesOf } from '@storybook/vue'

import xInput from './Input.vue'
import Field from './Field.vue'
import Control from './Control.vue'

const components = { Field, xInput, Control }
function render (template) {
  return { 
    data: () => ({ value: '' }),
    template: `<div style="padding: 1.25rem">${template}</div>`,
    components
  }
}

storiesOf(xInput.name, module)
  .add('default', () => render(
    `
    Default
    <xInput v-model=value placeholder="Text input" />

    {{ value }}
    `
  ))
  .add('colors', () => render(
    `
    <Field>
      <Control v-model=value color=primary placeholder="Primary input" />
    </Field>
    <Field>
      <Control v-model=value color=info placeholder="Info input" />
    </Field>
    <Field>
      <Control v-model=value color=link placeholder="Link input" />
    </Field>
    <Field>
      <Control v-model=value color=success placeholder="Success input" />
    </Field>
    <Field>
      <Control v-model=value color=warning placeholder="Warning input" />
    </Field>
    <Field>
      <Control v-model=value color=danger placeholder="Danger input" />
    </Field>
    `
  ))
  .add('sizes', () => render(
    `
    <Field>
      <Control v-model=value size=small placeholder="Small input" />
    </Field>
    <Field>
      <Control v-model=value placeholder="Default input" />
    </Field>
    <Field>
      <Control v-model=value size=medium placeholder="Medium input" />
    </Field>
    <Field>
      <Control v-model=value size=large placeholder="Large input" />
    </Field>
    `
  ))
  .add('states', () => render(
    `
    <Field>
      <Control v-model=value placeholder="Normal input" />
    </Field>
    <Field>
      <Control v-model=value hovered placeholder="Hovered input" />
    </Field>
    <Field>
      <Control v-model=value focused placeholder="Focused input" />
    </Field>
    <Field>
      <Control v-model=value loading placeholder="Loading input" />
    </Field>
    <Field>
      <Control v-model=value disabled placeholder="Disabled input" />
    </Field>
    <Field>
      <Control :value="value || 'Readonly input'" readonly/>
    </Field>
    <Field>
      <Control :value="value || 'Static input'" static readonly/>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email size=small>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email size=medium>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email size=large>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    <Field>
      <Control :value="value" type=email placeholder=Email color=success>
        <i class="fa fa-envelope" slot=left />
        <i class="fa fa-check" slot=right />
      </Control>
    </Field>

    Size control with loading:
    <Field>
      <Control v-model=value loading size=small placeholder="Small input" />
    </Field>
    <Field>
      <Control v-model=value loading placeholder="Default input" />
    </Field>
    <Field>
      <Control v-model=value loading size=medium placeholder="Medium input" />
    </Field>
    <Field>
      <Control v-model=value loading size=large placeholder="Large input" />
    </Field>
    `
  ))
  .add('textarea default', () => render(
    `
    Default
    <xInput v-model=value placeholder="Text input" large-text/>
    <br>
    <xInput v-model=value placeholder="Text input" rows=10 large-text/>
    `
  ))
  .add('textarea colors', () => render(
    `
    <Field>
      <Control v-model=value color=primary placeholder="Primary input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value color=info placeholder="Info input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value color=link placeholder="Link input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value color=success placeholder="Success input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value color=warning placeholder="Warning input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value color=danger placeholder="Danger input"  large-text/>
    </Field>
    `
  ))
  .add('textarea sizes', () => render(
    `
    <Field>
      <Control v-model=value size=small placeholder="Small input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value placeholder="Default input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value size=medium placeholder="Medium input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value size=large placeholder="Large input"  large-text/>
    </Field>
    `
  ))
  .add('textarea states', () => render(
    `
    <Field>
      <Control v-model=value placeholder="Normal input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value hovered placeholder="Hovered input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value focused placeholder="Focused input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value loading placeholder="Loading input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value disabled placeholder="Disabled input"  large-text/>
    </Field>
    <Field>
      <Control :value="value || 'Readonly input'" readonly large-text/>
    </Field>
    <Field>
      <Control :value="value || 'Static input'" static readonly large-text/>
    </Field>

    Size control with loading:
    <Field>
      <Control v-model=value loading size=small placeholder="Small input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value loading placeholder="Default input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value loading size=medium placeholder="Medium input"  large-text/>
    </Field>
    <Field>
      <Control v-model=value loading size=large placeholder="Large input"  large-text/>
    </Field>
    `
  ))
