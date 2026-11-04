import { removeEffect, addEffect, activeScope } from 'motion-dom';
import { Timeline } from '../timeline/index.mjs';
import { animateSubject } from './subject.mjs';

function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */
function createScopedAnimate(options = {}) {
    const { scope, reduceMotion, skipAnimations } = options;
    /**
     * Implementation
     */
    function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        const scopeTransition = activeScope.current?.transition;
        const inherited = {};
        if (reduceMotion !== undefined)
            inherited.reduceMotion = reduceMotion;
        if (skipAnimations !== undefined)
            inherited.skipAnimations = skipAnimations;
        let timeline;
        if (isSequence(subjectOrSequence)) {
            const sequenceOptions = {
                ...inherited,
                ...optionsOrKeyframes,
                scope,
            };
            if (scopeTransition) {
                sequenceOptions.defaultTransition = {
                    ...scopeTransition,
                    ...sequenceOptions.defaultTransition,
                };
            }
            timeline = new Timeline(subjectOrSequence, sequenceOptions);
        }
        else {
            // Extract top-level onComplete so it doesn't get applied per-value
            const { onComplete, ...rest } = options || {};
            const transition = {
                ...inherited,
                ...scopeTransition,
                ...rest,
            };
            /**
             * Play the animations directly, and only compile them as a
             * sequence if the timeline is changed. Values animated from a
             * number are animated via their onUpdate callback instead.
             */
            const { onUpdate } = rest;
            const segment = (typeof subjectOrSequence === "number" ||
                (typeof subjectOrSequence === "string" &&
                    (typeof optionsOrKeyframes === "string" ||
                        Array.isArray(optionsOrKeyframes)))
                ? [
                    onUpdate || (() => { }),
                    Array.isArray(optionsOrKeyframes)
                        ? optionsOrKeyframes
                        : [subjectOrSequence, optionsOrKeyframes],
                    { ...transition, onUpdate: undefined },
                ]
                : [subjectOrSequence, optionsOrKeyframes, transition]);
            timeline = new Timeline([segment], { ...inherited, onComplete, scope }, animateSubject(subjectOrSequence, optionsOrKeyframes, transition, scope));
        }
        return timeline;
    }
    return scopedAnimate;
}
const animate = /* @__PURE__ */ Object.assign(
/* @__PURE__ */ createScopedAnimate(), {
    /**
     * Register an effect so `animate()` can animate the subjects it
     * claims, for instance `animate.addEffect(threeEffect)`. The most
     * recently added effect is tested first. DOM elements are always
     * animated directly.
     */
    addEffect,
    removeEffect,
});

export { animate, createScopedAnimate };
//# sourceMappingURL=index.mjs.map
