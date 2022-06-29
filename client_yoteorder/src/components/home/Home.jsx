import React from 'react'
import HeaderFloating from '../navbars/HeaderFloating'
import MainNav from '../navbars/MainNav'
import FrontIntro from './FrontIntro'
import HighlyRated from './HighlyRated'
import HowToGetStarted from './HowToGetStarted'

function Home() {
  return (
    <div>

  <HeaderFloating></HeaderFloating>

    <FrontIntro/>

    <HighlyRated/>

    <HowToGetStarted/>
    
    
    </div>
  )
}

export default Home