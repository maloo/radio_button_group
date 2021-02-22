import { html, slotted } from "@microsoft/fast-element";
import { Radio } from "@microsoft/fast-foundation";
import { endTemplate, startTemplate } from "@microsoft/fast-foundation";

export const RadioTemplate = html<Radio>`
    <template
        role="radio"
        class="${x => (x.checked ? "checked" : "")} ${x =>
        x.readOnly ? "readonly" : ""}"
        aria-checked="${x => x.checked}"
        aria-required="${x => x.required}"
        aria-disabled="${x => x.disabled}"
        aria-readonly="${x => x.readOnly}"
        @keypress="${(x, c) => x.keypressHandler(c.event as KeyboardEvent)}"
        @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
    >
        ${startTemplate}
        <label part="label" class="${x => x.defaultSlottedNodes && x.defaultSlottedNodes.length ? "label" : "label label__hidden"}">
            <slot ${slotted("defaultSlottedNodes")}></slot> 
        </label>
        ${endTemplate}
    </template>
`;
