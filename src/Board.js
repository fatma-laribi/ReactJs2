import React from 'react';
import './App.css';
import Note from './Note';

class Board extends React.Component{
  constructor(props){
      super(props);
      this.state={
          notes:[   ]
      }
  }

  nextId= ()=>{
      this.uniqueId=this.uniqueId || 0
      return this.uniqueId++
  }
  add=(text)=>{

      var notes=[
          ...this.state.notes,//SEEEEE
          {id:this.nextId(),// function?
          note:text}
      ]
      this.setState({notes})
  }

  update=(newText,id)=>{
      var notes=this.state.notes.map(
          note=> (note.id !== id)?
          note:
          {
           ...note, //look for
           note:newText   
          }
      )
      this.setState({notes})
  }
  remove= (id)=> {
      var notes=this.state.notes.filter(note=>note.id !== id);
      this.setState({notes})
  }
  eachNote=(note)=>{
      return (<Note key={note.id}// child elements must have a unique key
      id={note.id}
      onChange={this.update}
      onRemove={this.remove}
      >{note.note}</Note>)
  }
render(){return(
    <div className="board">
      {this.state.notes.map(
          this.eachNote
      )}
      <button onClick={()=>this.add()}>+</button></div>
)} 
}
export default Board;
