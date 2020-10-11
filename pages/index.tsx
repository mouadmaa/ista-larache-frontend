import { FC, Fragment } from 'react'

import HeaderMain from '../layout/HeaderMain/HeaderMainComponent'
import AboutSection from '../components/Home/AboutSection/AboutSectionComponent'

const Home: FC = () => {
  return (
    <Fragment>
      <HeaderMain />
      <AboutSection />
    </Fragment>
  )
}

export default Home
