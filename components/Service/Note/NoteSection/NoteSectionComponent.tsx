import { FC, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { NoteSectionContainer } from './NoteSectionStyles'
import { scrollToElement } from '../../../../utils/scrollToElement'
import HeadingSecondary from '@/components/UI/Heading/HeadingScondary/HeadingScondaryComponent'
import { Student } from '@/generated/graphql'

const NoteSection: FC = () => {
  const [student, setStudent] = useState<Student>()

  const router = useRouter()
  const notesRef = useRef()

  useEffect(() => {
    if (router.asPath.includes('#notes')) {
      scrollToElement(notesRef)
    }
  }, [router])

  return (
    <NoteSectionContainer>
      <HeadingSecondary
        text="les notes d'examen et la note finale de l'année"
      />

      <h3>Form</h3>

      {!student && (
        <div>
          <img
            src='images/student.png'
            alt="student"
          />
        </div>
      )}
    </NoteSectionContainer>
  )
}

export default NoteSection
