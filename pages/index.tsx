import { FC, Fragment } from 'react'

import HeaderPrimary from '../layout/HeaderPrimary/HeaderPrimaryComponent'
import AboutSection from '../components/Home/AboutSection/AboutSectionComponent'
import FormationSection from '../components/Home/FormationSection/FormationSectionComponent'

const Home: FC = () => {
  return (
    <Fragment>
      <HeaderPrimary />
      <AboutSection />
      <FormationSection />
    </Fragment>
  )
}

export default Home
