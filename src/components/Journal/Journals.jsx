import React from 'react'
import journalData from '../../data/journaldata'
import JournalCard from './JournalCard'

const journalcards = journalData.map(item =>{
    return <JournalCard key={item.id} {...item}/>
})

function Journals() {
  return (
    <>
{journalcards}

    
    </>
  )
}

export default Journals