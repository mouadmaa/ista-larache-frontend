import { useRouter } from 'next/router'

import {
  HeaderPrimaryContainer, HeaderPrimarySectionService, HeaderPrimaryServerBoxContainer, HeaderPrimaryTextContainer
} from './HeaderPrimaryStyles'
import HeadingPrimary from '../../components/UI/Heading/HeadingPrimary/HeadingPrimaryComponent'
import HeadingTertiary from '../../components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'

const HeaderPrimary = () => {
  const { push } = useRouter()

  const handleClick = hash => {
    push(`/services#${hash}`)
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
          <img src='images/notes.png' alt="notes" />
          <div>
            <HeadingTertiary text="Les Notes d'éxamens" />
            <p>Si vous avez le CEF et le Mot de Passe, vous pouvez voir vos notes d'examen et la note finale de l'année.</p>
          </div>
        </HeaderPrimaryServerBoxContainer>

        <HeaderPrimaryServerBoxContainer onClick={() => handleClick('timetable')}>
          <img src='images/timetable.png' alt="timetable" />
          <div>
            <HeadingTertiary text='Les Emplois Du Temps' />
            <p>Consultez et téléchargez l'emploi du temps pour vos filière ou autres filières.</p>
          </div>
        </HeaderPrimaryServerBoxContainer>

        <HeaderPrimaryServerBoxContainer onClick={() => handleClick('register')}>
          <img src='images/register.png' alt="register" />
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
