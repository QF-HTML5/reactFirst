import React, { Component, Fragment } from 'react';
class FirstPage extends Component {
    constructor() {
        super();
        this.date = {
            msg: 'hello',
            lists: [111, 222, 333, 444],
            isShow: true
        }
    };
    render() {
        // if(this.date.isShow) {
        //     var info = <h1>holle</h1>;
        // };
      
        return (
            <Fragment>
                {this.date.isShow && <h1>hello</h1>}
                <br/>
                <ul>
                    {
                        this.date.lists.map(function (item, index) {
                            return <li key = {index}> {item}</li>
                        }) 
                    }
                </ul>
            </Fragment>
        )
    }
}
export default FirstPage;