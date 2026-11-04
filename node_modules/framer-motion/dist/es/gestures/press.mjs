import { Feature, press } from 'motion-dom';
import { handleGestureEvent } from './hover.mjs';

function handlePressEvent(node, event, lifecycle) {
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
        return;
    }
    handleGestureEvent(node, event, "Tap", lifecycle);
}
class PressGesture extends Feature {
    mount() {
        const { current } = this.node;
        if (!current)
            return;
        const { globalTapTarget, propagate } = this.node.props;
        this.unmount = press(current, (_element, startEvent) => {
            handlePressEvent(this.node, startEvent, "Start");
            return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "" : "Cancel");
        }, {
            useGlobalTarget: globalTapTarget,
            stopPropagation: propagate?.tap === false,
        });
    }
    unmount() { }
}

export { PressGesture };
//# sourceMappingURL=press.mjs.map
