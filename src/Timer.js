import React from 'react';

export function withCounter(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: 0,
                countInterval: props.countInterval
            };
            this.incrementer = null;
        }

        startTimer() {
            // Then we increment counter by 1 every second
            this.incrementer = setInterval(() => {
                this.props.start();
            }, this.state.countInterval);
        }

        componentDidMount() {
            this.startTimer();
        }

        componentWillUnmount() {
            clearInterval(this.incrementer);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withCounter;
