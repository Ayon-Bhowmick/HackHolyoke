import React from 'react';
import './Add.css';
// import ListItems from './ListItems'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

// library.add(faTrash)

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
 
  
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
    })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        [e.target.name]: e.target.value
      }
    })
  }
 render(){
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Food Name" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <input type="key" placeholder="Enter Date" value= {this.state.currentItem.key} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
      </header>
    </div>
  );
 }
}


export default Add;