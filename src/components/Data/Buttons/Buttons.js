import React from 'react'

function Buttons(props){

    return(
        <div className='buttons-container'>
            <button className='switch' onClick={props.previous}>← Previous</button>
            <section>
                <button className='blue-button' >Edit</button>
                <button className='blue-button' >Delete</button>
                <button className='blue-button' >New</button>
            </section>
            <button className='switch' onClick={props.next}>Next →</button>
        </div>
    )
}

export default Buttons