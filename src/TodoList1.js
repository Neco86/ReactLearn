import React from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction,getAddItemAction,getDeleteItemAction,getInitList } from './store/actionCreators'
const TodoList = (props) => {
        const { inputValue,list,handleInputChange,handleBtnClick,handleItemClick } = props
        return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {list.map((item,index)=>{
                    return <li key={index} onClick={()=>{handleItemClick(index)}}>{item}</li>
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
            const action=getInputChangeAction(e.target.value)
            dispatch(action)
        },
        handleBtnClick(){
            const action=getAddItemAction()
            dispatch(action)
        },
        handleItemClick(index){
            const action=getDeleteItemAction(index)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
//TodoList连接store,连接规则在mapStateToProps里,修改数据的函数在mapDispatchToProps