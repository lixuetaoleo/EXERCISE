import React from 'react'
import {Input, Button, List} from 'antd'


const TodoListUI  = (props) => {
    return(
        <div style={{margin:10}}>
                <Input 
                    value={props.inputValue} 
                    placeholder='todo info' 
                    style={{width:300,marginRight:10}}
                    onChange={props.handleInputChange} 
                />
                <Button onClick={props.handleBtnClick} type="primary">submit</Button>
                <List
                    style={{marginTop:30, width:300}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => (<List.Item onClick={()=>{props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
                <div>hello</div>
        </div>
    );
};

export default TodoListUI