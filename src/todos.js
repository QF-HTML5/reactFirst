import React from 'react'
class Todos extends React.Component {
    constructor () {
        super();
        this.state = {
            msg: '',
            lists: [

            ] 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.msg} onChange = { this.handleChange } onKeyDown = { this.handleAdd } />
                <p> { this.state.msg } </p>
                <ul>
                    {
                        this.state.lists.map((item,index)=>{
                            return <li key={ index }> { item } <button onClick={ ()=>{ this.handleRemove(index) } }>×</button> </li> 
                                
                        })                       
                    }

                </ul>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            msg: e.target.value
        })
    };
    handleAdd(e) {
        if (e.keyCode === 13) {
            this.setState({
                lists: [this.state.msg , ...this.state.lists],
                msg: ''
            })
        }
    };
    handleRemove (index) {
        var cloneLists = [...this.state.lists];
        cloneLists.splice(index, 1);
        this.setState({
            lists: cloneLists
        })
    }

}
export default Todos;