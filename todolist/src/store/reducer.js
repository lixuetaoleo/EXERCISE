const defaultState = {
    inputValue:'hhh',
    list:[1,2,3]
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === 'click_submit_button'){
        const newState = JSON.parse(JSON.stringify(state));
        if(state.inputValue !== '')
            newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === 'delete_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.pop();
        return newState;
    }
    return state;
}