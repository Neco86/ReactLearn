import React, { Component, Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import './style.css'
class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemClick = this.handleItemClick.bind(this)
    }
    render() {
        return (
            <Fragment>
            <div>
                <label htmlFor='insertArea'>输入内容</label>   
                <input
                id='insertArea'
                className='input'
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                />
                 <button onClick={this.handleBtnClick}>提交</button>
             </div>
            <ul>
                {this.getTodoItem()}
            </ul>
        </Fragment>
        );
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                content={item}
                index={index}
                handleItemClick={this.handleItemClick}
                key={index}
                ></TodoItem>)
        })
    }
    handleInputChange(e) {
        const value=e.target.value;
        this.setState(()=>({inputValue: value}))
    }
    handleBtnClick() {
        this.setState((prevState)=>({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
    }))
    }
    handleItemClick(index) {
        this.setState((prevState)=>{
        const list = [...prevState.list];
        list.splice(index, 1);
        return {list}
    })
    }
    componentDidMount() {
            axios.get('/api/todolist')
                .then((res)=>{
                    this.setState(()=>({list:[...res.data]}))
                })
                .catch(()=>{alert('error')})
           }
}

export default TodoList;