import { customElement } from '@microsoft/fast-element';
import { applyMixins, Radio, StartEnd } from '@microsoft/fast-foundation';
import { RadioTemplate as template} from './MalooRadio.template';
import { RadioStyles as styles } from './MalooRadio.styles';

@customElement({
    name: 'maloo-radio',
    template,
    styles,
})
export class MalooRadio extends Radio {
}

export interface MalooRadio extends StartEnd {}
applyMixins(MalooRadio, StartEnd);