import { customElement } from '@microsoft/fast-element';
import { RadioGroup, RadioGroupTemplate as template } from '@microsoft/fast-foundation';
import { RadioGroupStyles as styles } from './MalooRadioGroup.styles';

@customElement({
    name: 'maloo-radio-group',
    template,
    styles,
})
export class MalooRadioGroup extends RadioGroup {
}
