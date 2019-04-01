import React,{Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props) {
    super(props);
    this.handleItemClick=this.handleItemClick.bind(this)
}
    render() {
        const {content}=this.props;
        return(
            <div onClick={this.handleItemClick}>{content}</div>
            )
    }
    handleItemClick() {
        const {handleItemClick,index}=this.props;
        handleItemClick(index)
    }
    shouldComponentUpdate(nextProps,nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        }else{
            return false            
        }
    }
}
TodoItem.propTypes = {
    content: PropTypes.string,
    handleItemClick: PropTypes.func,
    index: PropTypes.number,

}
export default TodoItem;