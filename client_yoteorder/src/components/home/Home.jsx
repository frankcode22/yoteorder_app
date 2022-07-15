import React from 'react'
import HeaderFloating from '../navbars/HeaderFloating'
import MainNav from '../navbars/MainNav'
import FrontIntro from './FrontIntro'
import HighlyRated from './HighlyRated'
import HowToGetStarted from './HowToGetStarted'
import LogInModal from './LogInModal'

function Home() {
  return (
    <div>

  <HeaderFloating></HeaderFloating>

    <FrontIntro/>

    <HighlyRated/>

    <HowToGetStarted/>


    <LogInModal></LogInModal>
    
    
    </div>
  )
}

export default Home