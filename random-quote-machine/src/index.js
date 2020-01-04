import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const quotes = [
    {
        author: "Test",
        quote: "tttt"
    },
    {
        author: "Test1",
        quote: "tttt1"
    },
    {
        author: "Test2",
        quote: "tttt2"
    },
    {
        author: "Test3",
        quote: "tttt3"
    },
    {
        author: "Test4",
        quote: "tttt4"
    },
    {
        author: "Test5",
        quote: "tttt5"
    },
    {
        author: "Test6",
        quote: "tttt6"
    },
    {
        author: "Test7",
        quote: "tttt7"
    },
    {
        author: "Test8",
        quote: "tttt8"
    },
    {
        author: "Test9",
        quote: "tttt9"
    },
    {
        author: "Test10",
        quote: "tttt10"
    }
];
class QuoteWords extends React.Component{
    render(){
        return(
        <div id={this.props.id}>{quotes[this.props.randomnum].author}</div>
        );
    }
}
class Author extends React.Component{
    render(){
        return(
        <div id={this.props.id}>{quotes[this.props.randomnum].quote}</div>
        );
    }
}
class App extends React.Component{
    render() {
        const random = Math.floor(Math.random() * 10);
        return (
            <div id="quote-box">
                <QuoteWords id="text" randomnum={random}/>
                <Author id="author" randomnum={random}/>
            </div>       
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
