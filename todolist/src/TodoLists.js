import React from 'react'
import 'antd/dist/antd.css'

import store from './store/index'
import { getInputChangeAction, getButtonClick, getDeleteItem, initListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'


class TodoLists extends React.Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange(event){
        const action = getInputChangeAction(event.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getButtonClick();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getDeleteItem(index);
        store.dispatch(action);
    }

    render(){
        return(
            <TodoListUI 
                inputValue={this.state.inputValue} 
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        ); 
    }

    componentDidMount(){
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        }).catch();
    }
};

export default TodoLists