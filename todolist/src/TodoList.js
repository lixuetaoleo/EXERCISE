import React from 'react'
import TodoItem from './TodoItem'
import axios from'axios'

class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			inputValue : '',
			list : ['1', '2']
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleInput(event){
		const value = event.target.value;
		this.setState(() => ({inputValue : value}));
	}
	handleBtnClick(event){
		if(this.state.inputValue === '')
			return;
		this.setState((prevState) => ({
			list : [...prevState.list, prevState.inputValue],
			inputValue : ''
		}));
	}
	handleDelete(index){
		// immutable
		// state不允许我们做任何的改变
	
		this.setState( (prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return {list};
		});
	}
	componentDidMount(){
		axios.get('api/todolist').then(()=>{alert('success')}).catch(()=>{alert('error')});
	}
	render(){
		return(
			<React.Fragment>
				<div>
					<label htmlFor="insertArea">input:</label>
					<input id="insertArea" 
							value={this.state.inputValue} 
							onChange={this.handleInput} 
					/>
					<button onClick={this.handleBtnClick}>submit</button>
				</div>
				<ul>
					{
						this.state.list.map((item,index) => {
							return <TodoItem content={item} index={index} key={index} deleteItem={this.handleDelete}/>
							/*<li key={index} onClick={this.handleDelete.bind(this, index)} >{item}</li>*/
						})
					}
				</ul>
			</React.Fragment>
		);
	}

};



export default TodoList;