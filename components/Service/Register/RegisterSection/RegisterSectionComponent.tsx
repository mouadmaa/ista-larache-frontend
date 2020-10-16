import { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { RegisterSectionContainer } from './RegisterSectionStyles'
import HeadingSecondary from '@/components/UI/Heading/HeadingScondary/HeadingScondaryComponent'
import { scrollToElement } from '../../../../utils/scrollToElement'
import { Class } from '@/generated/graphql'
import { SelectClassContainer } from '../../Class/SelectClass/SelectClassStyles'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'
import SelectClass from '../../Class/SelectClass/SelectClassComponent'
import { ButtonLinkContainer } from '@/components/UI/Button/ButtonLink/ButtonLinkStyles'
import RegisterTable from '../RegisterTable/RegisterTableComponent'

const RegisterSection: FC = () => {
  const [selectedclass, setSelectedClass] = useState<Class>()

  const router = useRouter()
  const registerRef = useRef()

  useEffect(() => {
    if (router.asPath.includes('#register')) {
      scrollToElement(registerRef)
    }
  }, [router])

  const handleSelect = (selectedclass?: Class) => setSelectedClass(selectedclass)

  return (
    <RegisterSectionContainer
      ref={registerRef}
      tableVisible={Boolean(selectedclass)}
    >
      <HeadingSecondary
        text="Inscreption ou vérifier acceptation"
      />

      <div>
        <HeadingTertiary
          text="Pour l’inscription au ISTA Larache consulter le lien:"
        />
        <ButtonLinkContainer
          target='_blanck'
          href='https://inscription.ma/inscription-ofppt-ista-ita-maroc/'
        >
          cliquez ici pour inscrire
        </ButtonLinkContainer>
      </div>

      <SelectClassContainer>
        <HeadingTertiary
          text="les stagiaires inscrits dans l'établissement:"
        />
        <SelectClass
          onSelect={handleSelect}
        />
      </SelectClassContainer>

      {selectedclass && (
        <RegisterTable
          selectedclass={selectedclass}
        />
      )}
    </RegisterSectionContainer>
  )
}

export default RegisterSection
