import React, {Component} from 'react'
import {connect} from 'react-redux'

const TodoListss = (props) => {
    const {inputValue, list, changeInputValue, clickSubmitButton, deleteItem} = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={clickSubmitButton} >submit</button>
                <ul>
                    {
                        list.map((item, index) => {return <li key={item} onClick={deleteItem}>{item}</li>})
                    }
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list : state.list,
    };
};

//store.dispatch <==> props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(event){
            const action = {
                type : 'change_input_value',
                value : event.target.value,
            }
            dispatch(action);
        },
        clickSubmitButton(){
            const action = {
                type : 'click_submit_button',
            }
            dispatch(action);
        },
        deleteItem(){
            const action = {
                type : 'delete_item',
            }
            dispatch(action);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListss);