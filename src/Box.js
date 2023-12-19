import React from "react";

function Box(props) {
    const { color = "" } = props;
    return (
        <div
            style={{
                width: 200,
                height: 200,
                backgroundColor: color,
                border: "1px solid black"
            }}
        />
    );
}

export default Box;
