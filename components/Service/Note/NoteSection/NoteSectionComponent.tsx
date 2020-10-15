import { FC, Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { NoteSectionContainer } from './NoteSectionStyles'
import HeadingSecondary from '@/components/UI/Heading/HeadingScondary/HeadingScondaryComponent'
import Button from '@/components/UI/Button/Button/ButtonComponent'
import { Student } from '@/generated/graphql'
import { scrollToElement } from '../../../../utils/scrollToElement'
import NoteForm from '../NoteForm/NoteFormComponent'
import NoteTable from '../NoteTable/NoteTableComponent'

const NoteSection: FC = () => {
  const [studentNotes, setStudentNotes] = useState<Student>()

  const router = useRouter()
  const notesRef = useRef()

  useEffect(() => {
    if (router.asPath.includes('#notes')) {
      scrollToElement(notesRef)
    }
    console.log(studentNotes)
  }, [router, studentNotes])

  return (
    <NoteSectionContainer
      ref={notesRef}
      tableVisible={Boolean(studentNotes)}
    >
      <HeadingSecondary
        text="les notes d'examen et la note finale de l'année"
      />

      {!studentNotes && (
        <Fragment>
          <NoteForm
            setStudentNotes={setStudentNotes}
          />
          <div>
            <img
              src='images/student.png'
              alt="student"
            />
          </div>
        </Fragment>
      )}

      {studentNotes && (
        <Fragment>
          <NoteTable
            studentNote={studentNotes}
          />
          <Button
            onClick={() => setStudentNotes(undefined)}
            text='Cache la table des notes'
          />
        </Fragment>
      )}
    </NoteSectionContainer>
  )
}

export default NoteSection
