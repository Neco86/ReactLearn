import React from 'react';
import ReactDOM from 'react-dom';
//import TodoList from './TodoList.js';
//import App from './App'
//import TodoListC from './TodoListC.js';

import TodoListR from './TodoListR.js';
import { Provider } from 'react-redux'
import store from './storeR'
const App=(
    <Provider store={store}>{/*Provider里的所有组件可以获取store*/}
        <TodoListR />
    </Provider>
    )



//ReactDOM.render(<TodoList />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<TodoListC />, document.getElementById('root'));
ReactDOM.render(App, document.getElementById('root'));


