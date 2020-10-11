import { useRouter } from 'next/router'

import {
  HeaderMainContainer, HeaderMainSectionService, HeaderMainServerBoxContainer, HeaderMainTextContainer
} from './HeaderMainStyles'
import HeaderPrimary from '../../components/UI/Header/HeaderPrimary/HeaderPrimaryComponent'
import HeaderTertiary from '../../components/UI/Header/HeaderTertiary/HeaderTertiaryComponent'

const HeaderMain = () => {
  const router = useRouter()

  const handleClick = _hash => {
    router.push('/services', '/services')
  }

  return (
    <HeaderMainContainer>
      <HeaderMainTextContainer>
        <HeaderPrimary
          textMain='ISTA LARACHE'
          textSub='Institut Spécialisé de Technologie Appliquée Larache - OFPPT'
        />
      </HeaderMainTextContainer>

      <HeaderMainSectionService>
        <HeaderMainServerBoxContainer onClick={() => handleClick('notes')}>
          <img src='svgs/discount.svg' alt="notes" />
          <div>
            <HeaderTertiary text="Les Notes d'éxamens" />
            <p>Si vous avez le CEF et le Mot de Passe, vous pouvez voir vos notes d'examen et la note finale de l'année.</p>
          </div>
        </HeaderMainServerBoxContainer>

        <HeaderMainServerBoxContainer onClick={() => handleClick('timetable')}>
          <img src='svgs/timetable.svg' alt="timetable" />
          <div>
            <HeaderTertiary text='Les Emplois Du Temps' />
            <p>Consultez et téléchargez l'emploi du temps pour vos filière ou autres filières.</p>
          </div>
        </HeaderMainServerBoxContainer>

        <HeaderMainServerBoxContainer onClick={() => handleClick('registration')}>
          <img src='svgs/about.svg' alt="registration" />
          <div>
            <HeaderTertiary text='Inscription et vérifiez votre acceptation' />
            <p>Vérifiez votre acceptation et les étapes pour vous inscrire à ISTA LARACHE.</p>
          </div>
        </HeaderMainServerBoxContainer>
      </HeaderMainSectionService>
    </HeaderMainContainer>
  )
}

export default HeaderMain
