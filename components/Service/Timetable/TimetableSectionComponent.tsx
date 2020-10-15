import { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { TimetableSectionContainer } from './TImetableStyles'
import { scrollToElement } from '../../../utils/scrollToElement'
import HeadingSecondary from '@/components/UI/Heading/HeadingScondary/HeadingScondaryComponent'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'
import SelectClass from '../Class/SelectClass/SelectClass'

const TimetableSection: FC = () => {
  const [timetableState, setTimetableState] = useState('')

  const router = useRouter()
  const timetableRef = useRef()

  useEffect(() => {
    if (router.asPath.includes('#timetable')) {
      scrollToElement(timetableRef)
    }
  }, [router])

  const handleSelect = (formationId?: string, classId?: string) => {
    console.log('formationId', formationId)
    console.log('classId', classId)
  }

  return (
    <TimetableSectionContainer
      ref={timetableRef}
    >
      <HeadingSecondary
        text="les emplois du temps"
      />

      <div>
        <HeadingTertiary
          text="choisissez un filière pour obtenir vos l'emplois du temps:"
        />

        <SelectClass
          onSelect={handleSelect}
        />
      </div>

      {/* {trainingState && (
        <div style={{ display: 'flex', marginTop: '3rem' }}>
          <div style={{ margin: 'auto' }}>
            {loadingTimetable ? (
              <CircularProgress disableShrink />
            ) : (
                <Fragment>
                  {timetableState ? (
                    <Fragment>
                      <img
                        style={{ height: '100%', width: '100%' }}
                        src={`${process.env.REACT_APP_ASSET_URL}${timetableState.image}`}
                        alt="Emploi des tepms"
                      />
                    </Fragment>
                  ) : (
                      <h3
                        style={{ fontSize: '2rem' }}
                        className='heading-tretiary center-text'>
                        Il n'a pas encore été ajouté
                      </h3>
                    )}
                </Fragment>
              )}
          </div>
        </div>
      )} */}
    </TimetableSectionContainer>
  )
}

export default TimetableSection
