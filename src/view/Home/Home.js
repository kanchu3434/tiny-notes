import React, { useState, useEffect, Component } from "react";
import "./Home.css";
import Note from "./../../components/Note/Note";
import swal from 'sweetalert';


function Home() {
   
    const [title,setTitle] = useState("")
    const [content ,setContent] = useState("")

  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      content: "You can add more note to this list"
    }
    
    
  ])

    function addnote(){
      const newNote={
      "title": title,
      "content": content
      }
      if(title==="" || content===""){
        swal({
          title: "Error",
          text: "Please  fill the all fileds",
          icon:"warning",
        }); 
           return;
      }

      setNotes([...notes,newNote])
      swal({
        title: "Note added",
        text: "Your note has been added to the list",
        icon: "success",
      });
        
      setTitle("")
      setContent("")
    }
  return (
    <>
      
      <div className="app-title-container">
        <h1 className="app-title"> My notes</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
        <div className="notes-container">
        {
          notes.map((note, index) => {
            return (
              <Note title={note.title} content={note.content} />

            )
          })
        }
      </div>
        </div>
        <div className="col-md-6">
         <div className="note-editor-container">
          <h3 className="text-center"> Addnote</h3>
          <form>
            <div>
              <input type="text" placeholder="Note Title"value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control mt-4"/>
            </div>
            <div>
              <input type="text" placeholder="Note Discription" value={content} onChange={(e)=>{setContent(e.target.value)}} className="form-control mt-4"/>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-primary mt-4" onClick={addnote}>Add Note</button>
            </div>
          </form>
          </div> 
        </div>
      </div>
      
    </>
  );
}

export default Home;
