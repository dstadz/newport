import React, { useEffect } from 'react'
import { A } from 'hookrouter'
import { useSetRecoilState } from 'recoil';
import { belowFoldState } from '../utils/store'
import { Section, H1 } from '../styles'

const Home: React.FC = () => {
  // const setBelowFold = useSetRecoilState(belowFoldState)

  // useEffect(() => { setBelowFold(true) }, [])

  return (
    <Section>
      <H1>
        Hey there! I am Daniel Stadler.
        <br/>
        I'm a Software Engineer in the SF Bay Area.
        <br/>
        Checkout some of my  <A href='/projects'>Projects</A>!
      </H1>
    </Section>
  )
}

export default Home
