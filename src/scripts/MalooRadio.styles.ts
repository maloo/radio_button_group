import { css } from '@microsoft/fast-element';
import { accentFillActiveBehavior, accentFillHoverBehavior, accentFillRestBehavior, accentForegroundCutRestBehavior, BaseButtonStyles, neutralFillActiveBehavior, neutralFillHoverBehavior, neutralFillRestBehavior, neutralForegroundRestBehavior } from '@fluentui/web-components';

export const RadioStyles = css`
    ${BaseButtonStyles}
:host {
    background: var(--neutral-fill-rest);
    color: var(--neutral-foreground-rest);
    font-family: var(--body-font);
    font-size: var(--type-ramp-base-font-size);
    line-height: var(--type-ramp-base-line-height);
    height: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    min-width: calc((var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px);
    padding: 0 calc((10 + (var(--design-unit) * 2 * var(--density))) * 1px);
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
:host(:active) {
    background: var(--neutral-fill-active);
}
:host(:hover), :host(:hover) label {
    background: var(--neutral-fill-hover);
    cursor: pointer;
}
:host(.checked) {
    background: var(--accent-fill-rest);
    color: var(--accent-foreground-cut-rest);
}
:host(.checked:active) {
    background: var(--accent-fill-active);
}
:host(.checked:hover), :host(.checked:hover) label {
    background: var(--accent-fill-hover);
}
`.withBehaviors(
    accentFillRestBehavior,
    accentFillActiveBehavior,
    accentFillHoverBehavior,
    accentForegroundCutRestBehavior,
    neutralFillRestBehavior,
    neutralFillActiveBehavior,
    neutralFillHoverBehavior,
    neutralForegroundRestBehavior,
 );
