import React,{useState,useEffect, Component} from "react";
import "./Home.css";
import Navbar from "./../../components/Navbar/Navbar";
import Note from  "./../../components/Note/Note";


function Home() {
  const [notes,setNotes] =useState([
    {
      title:"Note 1",
      content:"This content of note 1"
    },
    {
      title:"Note 2",
      content:"This content of note 2"
    },

    {
      title:"Note 3",
      content:"This content of note 3"
    },
    {
      title:"Note 4",
      content:"This is the content of note 4"
    }
  ])
    return (
      <>
      <Navbar/>
      <div className="app-title-container">
      <h1 className="app-title"> My notes</h1>
      </div>
      <div className="notes-container">
        {
          notes.map((note,index)=>{
            return (
              <Note title={note.title} content={note.content}/>

            )
          })
        }
      </div>
      </>
    );
  }
  
  export default Home;
  