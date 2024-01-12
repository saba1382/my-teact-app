import { useState,useRef } from 'react'
import './NewMovieForm.css'
import { useEffect } from 'react';

export default function NewMovieForm(props) {

    const[title , setTitle] = useState('')
    const[date , setDate] = useState('')
    const[genre,setGenre] = useState('action');
    const [btnSubmit, setBtnSubit] = useState();
    const [changeSelect, setChangeSelect] = useState();
    
    const resetForm = () => {
       
        setTitle('')
        setDate('')
        setGenre('action')
    }

     const handleSubmit = (e) => {
         e.preventDefault()


         const event = {
            title: title,
            date: date,
            genre:genre,
            id: Math.floor(Math.random() * 10000)  
         }
         props.addMovie(event)
         resetForm()
     }

     
  useEffect(() => {
    console.log(changeSelect)
    if (btnSubmit) {
        console.log('call use effect in project');
        alert('فیلم شما اضافه شد')
    }
    if (changeSelect) {
        alert(`زانر فیلم ${genre} انتخاب شد`)
        setChangeSelect(false)
    }
  }, [btnSubmit, changeSelect])

    
  return (
    
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Movie Title:</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <label>
                <span>Movie Date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            </label>
            <label>
                <span>Movie Genre</span>
                <select onChange={(e) => {setGenre(e.target.value); setChangeSelect(!changeSelect)}}>
                    <option value="action">Action</option>
                    <option value="horror">Horror</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                </select>
            </label>

            <button onClick={() => setBtnSubit(!btnSubmit)}>Submit</button>

            {/* <p>Title - {title} ,Date - {date}</p>
            <p onClick={resetForm}>Reset the Form</p> */}
        </form>
    
  )
}
