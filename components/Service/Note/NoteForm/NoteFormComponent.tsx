import { FC } from 'react'
import { Form, Input, message } from 'antd'
import { useForm } from 'antd/lib/form/Form'

import { NoteFormContainer } from './NoteFormStyles'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'
import Button from '@/components/UI/Button/Button/ButtonComponent'
import { Student, StudentNotesMutationVariables, useStudentNotesMutation } from '@/generated/graphql'

interface NoteFormProps {
  setStudentNotes: (studentNotes: Student) => void
}

const NoteForm: FC<NoteFormProps> = props => {
  const { setStudentNotes } = props

  const [form] = useForm()
  const [getStudentNotes, { loading }] = useStudentNotesMutation()

  const handleSubmit = async () => {
    try {
      const variables = await form.validateFields() as StudentNotesMutationVariables
      const { data } = await getStudentNotes({ variables })
      if (data?.studentNotes) setStudentNotes(data.studentNotes as Student)
    } catch (error) {
      message.error(error.message)
    }
  }

  return (
    <NoteFormContainer>
      <HeadingTertiary
        text="Entrez votre 'CIN' ou 'CEF' avec 'Password' pour obtenir vos notes"
      />
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
      >
        <Form.Item
          name="cinOrCef"
          rules={[
            {
              required: true,
              message: 'Le nom est obligatoire!',
            },
            {
              min: 6,
              message: 'Entrez au moins 6 caractères!',
            },
          ]}
        >
          <Input
            placeholder="votre cin or cef?"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Le mail est obligatoire!',
            },
            {
              len: 6,
              message: 'Entrez 6 caractères!',
            },
          ]}
        >
          <Input
            type="password"
            placeholder="votre password?"
          />
        </Form.Item>
        <Button
          text='afficher mes notes'
          onClick={handleSubmit}
          loading={loading}
        />
      </Form>
    </NoteFormContainer>
  )
}

export default NoteForm
