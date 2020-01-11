import {BUTTON_CLICK, DELETE_ITEM, CHANGE_INPUT_VALUE, INIT_LIST_ACTION} from './actionType' 

const defaultState = {
    inputValue: '111',
    list: [1,2,3],
};

// state整个仓库里的数据。
// reducer可以接收state，但是绝不能修改state。
export default (state = defaultState, action)=>{
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝，不会对之前的state造成改变
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === BUTTON_CLICK){
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝，不会对之前的state造成改变
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝，不会对之前的state造成改变
        newState.list.splice(action.index, 1);
        return newState;
    }
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state)); //深拷贝，不会对之前的state造成改变
        newState.list = action.data;
        return newState;
    }
    return state;
};