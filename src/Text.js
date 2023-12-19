import React from 'react';

function Text(props) {
    const { color = '', text = '' } = props;
    return (
        <p
            style={{
                color: color
            }}
        >
            {text}&nbsp;{color}
        </p>
    );
}

export default Text;
