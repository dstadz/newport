import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSetRecoilState } from 'recoil';

import { belowFoldState } from '../utils/store'
import { Section, H1 } from '../styles'
//import { Link } from 'react-router-dom'
const place = 'https://www.google.com/maps/@37.8093428,-122.3334453,10z'

const Home: React.FC = () => {
  const setBelowFold = useSetRecoilState(belowFoldState)

  useEffect(() => { setBelowFold(true) }, [])
  return (
    <Section style={{width:'100%'}}>
      <H1>
        Hey there! I am Daniel Stadler.
        <br/>
        I'm a Software Engineer in the <a target='_blank' href={place}>SF Bay Area</a>.
        <br/>
        Checkout some of my <Link to='/projects'>Projects</Link>!
      </H1>

    </Section>
  )
}

export default Home