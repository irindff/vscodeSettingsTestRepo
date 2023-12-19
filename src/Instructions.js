import React from "react";

function Instructions() {
    return (
        <div>
            <p>
                You are provided a <code>Box</code> component that accepts a{" "}
                <code>color</code> prop, that colors the background of the box. You are
                not allowed to change that component.
            </p>
            <p>
                Create your own component, <code>Text</code>, that accepts a{" "}
                <code>color</code> prop and a <code>text</code> prop and renders a{" "}
                <code>p</code> tag with this text and color.
            </p>
            <p>
                Hook both of these color props to the input below, and create a toggle
                button that will switch the display between the box and text.
            </p>
            <p>
                Finally, both components should reset the timer when they replace each
                other. the <code>Box</code> should move it every 1 second, and the{" "}
                <code>Text</code> should move it every 0.5 second.{" "}
                <strong>
                    Remember you are not allowed to change the Box component!
                </strong>
            </p>
        </div>
    );
}

export default Instructions;
