import './App.css';
import  React,{useState} from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import Eventlist from './components/Eventlist';
import NewMovieForm from './components/NewMovieForm';



function App() {
  
  const [showModal, setShowModal]=useState(false);
  const [showEvents, setShowEvents]=useState(true);



  const[events, setEvents]=useState([
    // {title:" HUSTLE (2030)" , id:1},
    // {title:" HUSTLE (2030)" , id:2},
    // {title:" HUSTLE (2030)" , id:3},
    // {title:" HUSTLE (2030)" , id:4},
  ])

  console.log('-----value show events', showEvents)

  const handlClick=(id)=>{
    setEvents((prevEvents) => {
     return prevEvents.filter( (event) => {
        return id !== event.id
      })
    })
    }

    const addMovie = (event) => {
        setEvents((prevEvents) =>{
          return[...prevEvents, event]
        })
        setShowModal(false)
    }


    const handleClose= () => {
      setShowModal(false)
    }


    const handleOpen= () => {
      setShowModal(true)
    }


    const subtitle= "Latest Movies"
    return ( 
     <div className="App">

      <Title title="My Favorite Movies" subtitle={subtitle}/>
  
  <button onClick={() => setShowEvents(!showEvents)}>toggle show events</button>

        {showEvents && <Eventlist events={events} handlClick={handlClick}/>
        } 


         {showModal && <Modal /*handleClose={handleClose}*/ isSalesModal={true} >
            <NewMovieForm addMovie={addMovie}/>
         </Modal>}
         <br />
         <button onClick={handleOpen} >Add New Movie</button>
         
     </div>
    );
  }







export default App;
