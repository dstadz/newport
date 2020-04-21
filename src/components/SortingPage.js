import React, {useState} from 'react'
import { Section, Card } from '../styles'
import SortCard from './Sorts/SortCard'
import bogo from './Sorts/algos/bogosort'
import bubble from './Sorts/algos/bubblesort'
import insertion from './Sorts/algos/insertionsort'
import quick from './Sorts/algos/quicksort'

const sorts = [bubble, insertion, quick, bogo]

const SortingPage = () => {
  return (
    <Section>
      {sorts.map(s =>{
        <SortCard
          key={s.id} title={s.title} fn={s.fn} table={s.table}>
        
        </SortCard>
      })}
    </Section>
  )
}

export default SortingPage