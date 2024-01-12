import React from 'react'
import styles from './Eventlist.module.css'

export default function Eventlist(props) {


  return (
    <div>
        {props.events.map((event,index)=>(
            <div className={styles.card} key={event.id}>
              <h2>{index + 1}-{event.title}</h2>
              <p>{ event.genre} - {event.date}</p>
              <button id={styles.butt} onClick={() => props.handlClick(event.id)}>Delet</button>
            </div>
         ))}
    </div>
  )
}

