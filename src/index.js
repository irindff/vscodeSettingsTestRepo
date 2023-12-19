import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from './Instructions';
import Box from './Box';
import Text from './Text';
import Timer from './Timer';
import './styles.css';

const CounterWithText = Timer(Text);
const CounterWithBox = Timer(Box);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: '',
            displayBox: true,
            displayedText: `You doesn't select any color`,
            buttonText: 'Text',
            counter: 0,
            countInterval: 1000
        };
        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    onChangeColor(inputValue) {
        this.setState({
            colorValue: inputValue
        });
        if (inputValue) {
            this.setState({
                displayedText: 'Selected Color Is:'
            });
        } else {
            this.setState({
                displayedText: `You doesn't select any color`
            });
        }
    }

    switchView() {
        this.setState({
            displayBox: !this.state.displayBox,
            buttonText: this.state.buttonText === 'Text' ? 'Box' : 'Text'
        });
        this.resetTimer();
    }
    startTimer() {
        // increment counter by 1 every second
        this.setState({
            counter: this.state.counter + 1
        });
    }

    resetTimer() {
        this.setState({
            counter: 0
        });
    }

    render() {
        return (
            <div className="App">
                <h1>Build me a timer</h1>
                <h2>Timer: {this.state.counter}</h2>
                <Instructions />
                <label htmlFor="colorInput">Selected Color: </label>
                <input
                    id="colorInput"
                    value={this.state.colorValue}
                    onChange={(event) => this.onChangeColor(event.target.value)}
                />
                {this.state.displayBox ? (
                    <CounterWithBox
                        color={this.state.colorValue}
                        start={this.startTimer}
                        reset={this.resetTimer}
                        countInterval={1000}
                    />
                ) : (
                    <CounterWithText
                        text={this.state.displayedText}
                        color={this.state.colorValue}
                        start={this.startTimer}
                        reset={this.resetTimer}
                        countInterval={500}
                    />
                )}

                <button onClick={this.switchView.bind(this)}>
                    Switch to <b>{this.state.buttonText}</b> View
                </button>
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
