import React,{Component} from 'react'
import store from './storeC'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getInitList} from './store/actionCreators.js'
import TodoListUI from './TodoListUI'

class TodoListC extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return <TodoListUI 
                inputValue={this.state.inputValue} 
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemClick={this.handleItemClick}
                />
    }
    handleInputChange(e) {
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemClick(index){
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    componentDidMount(){
        const action = getInitList()
        store.dispatch(action)
    }
}
export default TodoListC;