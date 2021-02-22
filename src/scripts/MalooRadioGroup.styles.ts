import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

export const RadioGroupStyles = css`
  ${display('flex')} :host {
    align-items: flex-start;
    margin: calc(var(--design-unit) * 1px) 0;
    flex-direction: column;
  }
  .positioning-region {
    display: flex;
    flex-wrap: nowrap;
  }
  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
  }
  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }

:host{
    --horizontal-corner-radius: calc(var(--corner-radius) * 1px);
    --vertical-corner-radius: calc(var(--corner-radius) * 1px);
}

::slotted(maloo-radio:first-child) {
    border-radius: var(--horizontal-corner-radius) 0 0 var(--horizontal-corner-radius);
}

::slotted(maloo-radio:last-child) {
    border-radius: 0 var(--horizontal-corner-radius) var(--horizontal-corner-radius) 0;
}

:host([orientation='vertical']) ::slotted(maloo-radio:first-child) {
    border-radius: var(--vertical-corner-radius) var(--vertical-corner-radius) 0 0;
}

:host([orientation='vertical']) ::slotted(maloo-radio:last-child) {
    border-radius: 0 0 var(--vertical-corner-radius) var(--vertical-corner-radius);
}
`;