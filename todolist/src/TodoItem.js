/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const {content} = this.props;
        return(
            <div onClick={this.handleClick}>
                {/* {this.props.test} - {content} */}
                {content}
            </div>
        );
    }
    handleClick(){
        const {deleteItem, index} = this.props   
        deleteItem(index);
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content)
            return true;
        else
            return false;
    }
};

TodoItem.propTypes = {
    content : PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem : PropTypes.func,
    index : PropTypes.number,
    // test : PropTypes.string.isRequired,
};

// TodoItem.defaultProps = {
//     test : 'hello world',
// }

export default TodoItem;