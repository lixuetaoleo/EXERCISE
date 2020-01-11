import React  from 'react'
import './style.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : true,
            list : [],
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleToggle(){
        this.setState({
            show : this.state.show ? false : true,
        });
    }
    handleAddItem(){
        this.setState((prevState) => {
            return {
                list : [...prevState.list, 'item']
            }
        });
    }
    render(){
        return (
            <React.Fragment>
                <TransitionGroup>
                    {this.state.list.map((item) => {
                        return (
                            <CSSTransition
                                timeout={1000}
                                classNames='fade'
                                unmountOnExit
                                appear={true}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                            
                        );
                    })}
                </TransitionGroup>
                
                <button onClick={this.handleAddItem}>toggle</button>
                {/* <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    unmountOnExit
                    appear={true}
                >
                    <div >HEllo</div>
                </CSSTransition> */}
                {/* <button onClick={this.handleToggle}>toggle</button> */}
            </React.Fragment>
        );
    }
};

export default App;