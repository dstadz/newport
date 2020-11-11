import React from 'react'
import { Section, SortContainer } from '../../styles'
import SortCard from './SortCard'
import bogo from './algos/bogosort'
import bubble from './algos/bubblesort'
import insertion from './algos/insertionsort'
import quick from './algos/quicksort'

const sorts = [bubble, insertion, quick, bogo]

const SortingPage = () => {
  return (
    <Section>
      <h2> Sorting stuff is cool</h2>
      <SortContainer>
      {sorts.map(s => (
        <SortCard
        key={s.id} title={s.title} fn={s.fn} table={s.table}>
        </SortCard>
        ))}
      </SortContainer>

    </Section>
  )
}

export default SortingPage