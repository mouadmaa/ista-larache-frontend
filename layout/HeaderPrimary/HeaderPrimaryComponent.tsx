import { useRouter } from 'next/router'

import {
  HeaderPrimaryContainer, HeaderPrimarySectionService, HeaderPrimaryServerBoxContainer, HeaderPrimaryTextContainer
} from './HeaderPrimaryStyles'
import HeadingPrimary from '../../components/UI/Heading/HeadingPrimary/HeadingPrimaryComponent'
import HeadingTertiary from '../../components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'

const HeaderPrimary = () => {
  const router = useRouter()

  const handleClick = hash => {
    router.push({ href: '/services', hash })
  }

  return (
    <HeaderPrimaryContainer>
      <HeaderPrimaryTextContainer>
        <HeadingPrimary
          textMain='ISTA LARACHE'
          textSub='Institut Spécialisé de Technologie Appliquée Larache - OFPPT'
        />
      </HeaderPrimaryTextContainer>

      <HeaderPrimarySectionService>
        <HeaderPrimaryServerBoxContainer onClick={() => handleClick('notes')}>
          <img src='svgs/discount.svg' alt="notes" />
          <div>
            <HeadingTertiary text="Les Notes d'éxamens" />
            <p>Si vous avez le CEF et le Mot de Passe, vous pouvez voir vos notes d'examen et la note finale de l'année.</p>
          </div>
        </HeaderPrimaryServerBoxContainer>

        <HeaderPrimaryServerBoxContainer onClick={() => handleClick('timetable')}>
          <img src='svgs/timetable.svg' alt="timetable" />
          <div>
            <HeadingTertiary text='Les Emplois Du Temps' />
            <p>Consultez et téléchargez l'emploi du temps pour vos filière ou autres filières.</p>
          </div>
        </HeaderPrimaryServerBoxContainer>

        <HeaderPrimaryServerBoxContainer onClick={() => handleClick('registration')}>
          <img src='svgs/about.svg' alt="registration" />
          <div>
            <HeadingTertiary text='Inscription et vérifiez votre acceptation' />
            <p>Vérifiez votre acceptation et les étapes pour vous inscrire à ISTA LARACHE.</p>
          </div>
        </HeaderPrimaryServerBoxContainer>
      </HeaderPrimarySectionService>
    </HeaderPrimaryContainer>
  )
}

export default HeaderPrimary
