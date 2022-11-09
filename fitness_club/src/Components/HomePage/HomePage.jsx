import React from 'react'
import AppSection from './Components/AppSection'
import FirstCarosal from './Components/FirstCarosal'
import FooterSection from './Components/FooterSection'
import GooglePlay from './Components/GooglePlay'
import LogoSection from './Components/LogoSection'
import PoundsLost from './Components/PoundsLost'
import SecondCarosal from './Components/SecondCarosal'
import ShareStory from './Components/ShareStory'
import TopSection from './Components/TopSection'
import WaightLoss from './Components/WaightLoss'
const HomePage = () => {
  return (
    <div>
        <TopSection/>
        <LogoSection/>
        <AppSection/>
        <WaightLoss/>
        <FirstCarosal/>
        <PoundsLost/>
        <ShareStory/>
        <SecondCarosal/>
        <GooglePlay/>
        <FooterSection/>
    </div>
  )
}

export default HomePage