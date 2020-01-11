import { CHANGE_INPUT_VALUE, BUTTON_CLICK, DELETE_ITEM, INIT_LIST_ACTION} from "./actionType";

export const getInputChangeAction = (value) => ({
    type : CHANGE_INPUT_VALUE,
    value
});

export const getButtonClick = () => ({
    type : BUTTON_CLICK,
});

export const getDeleteItem = (index) => ({
    type : DELETE_ITEM,
    index
});

export const initListAction = (data) => (
    {
        type : INIT_LIST_ACTION,
        data
    }
);