import React from 'react'
import { connect } from 'react-redux'
const TodoListR = (props) => {
        const { inputValue,list,handleInputChange,handleBtnClick } = props
        return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
        )
}
const mapStateToProps=(state)=>{
    return {
        inputValue:state.inputValue,
        list:state.list
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputChange(e){
            const action={
            type:'change_input_value',
            value:e.target.value
            }
            dispatch(action)
        },
        handleBtnClick(){
            const action={
            type:'add_todo_item'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListR);
//TodoList连接store,连接规则在mapStateToProps里,修改数据的函数在mapDispatchToProps