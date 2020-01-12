import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import App from './App'
// import TodoLists from './TodoLists';
import TodoListss from './TodoListss'
import {Provider} from 'react-redux'
import store from './store'
// ReactDOM.render(<TodoList />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TodoLists />, document.getElementById('root'));

const App = (
    <Provider store={store}>
        <TodoListss />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
