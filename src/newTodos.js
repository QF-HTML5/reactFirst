import React from 'react'


class NewTodos extends React.Component {
    constructor () {
        super();
        this.state = {
            msg: '',
            lists: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" value={ this.state.msg } onChange={ this.handleChange } onKeyDown={ this.handleAdd } />
                <p> { this.state.msg } </p>
                <ul>
                    { this.state.lists.map((item, index)=>{ return  <li key= { index }> { item } </li> } ) } 
                </ul>
            </div>
        )
    }
    handleChange (ev) {
        this.setState({
            msg: ev.target.value,
        })
    };
    handleAdd(ev) {
        if(ev.keyCode === 13){
            this.setState({
                lists: [this.state.msg, ...this.state.lists],
                msg: ''
            })
        }
    }
}
export default NewTodos;