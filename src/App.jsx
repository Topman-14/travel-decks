import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Data from './Data'

export default function App(){
    const cardElements = Data.map( item=>{
        return(
            <Card 
                {...item}
            />
        )
    })
    return(
        <div>
            <Navbar />
            {cardElements}
        </div>
    )
}