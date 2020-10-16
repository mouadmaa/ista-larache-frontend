import { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { TimetableImageContainer, TimetableSectionContainer } from './TImetableStyles'
import { scrollToElement } from '../../../utils/scrollToElement'
import HeadingSecondary from '@/components/UI/Heading/HeadingScondary/HeadingScondaryComponent'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'
import { Class } from '@/generated/graphql'
import SelectClass from '../Class/SelectClass/SelectClassComponent'
import { SelectClassContainer } from '../Class/SelectClass/SelectClassStyles'

const TimetableSection: FC = () => {
  const [selectedclass, setSelectedClass] = useState<Class>()

  const router = useRouter()
  const timetableRef = useRef()

  useEffect(() => {
    if (router.asPath.includes('#timetable')) {
      scrollToElement(timetableRef)
    }
  }, [router])

  const handleSelect = (selectedclass?: Class) => setSelectedClass(selectedclass)

  return (
    <TimetableSectionContainer
      ref={timetableRef}
    >
      <HeadingSecondary
        text="les emplois du temps"
      />

      <SelectClassContainer>
        <HeadingTertiary
          text="choisissez un filière pour obtenir vos l'emplois du temps:"
        />

        <SelectClass
          onSelect={handleSelect}
        />
      </SelectClassContainer>

      {selectedclass && (
        <TimetableImageContainer>
          {selectedclass.timetable ? (
            <img
              src={selectedclass.timetable}
              alt="Emploi des tepms"
            />
          ) : (
              <HeadingTertiary
                text="Il n'a pas encore été ajouté"
              />
          )}
        </TimetableImageContainer>
      )}
    </TimetableSectionContainer>
  )
}

export default TimetableSection
