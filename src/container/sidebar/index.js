import React, { Component } from 'react'
import './index.css'

class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            condition:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = function(){
        this.setState( { condition : !this.state.condition } );
    }
  render() {
    return (
    <div className={"col sidebar " + (this.state.condition ? "sidebar-expanded":"")}>
        <div class='row px-2 pt-1'>
            <div class='col w-100'>
                <i class='material-icons sidebar-menu-icon' onClick={this.handleClick}>menu</i>
            </div>
        </div>
    </div>
    );
  }
}

export default Sidebar;
