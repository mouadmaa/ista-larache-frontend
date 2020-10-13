import { FC } from 'react'
import { Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import TextArea from 'antd/lib/input/TextArea'

import { ContactFormContainer } from './ContactFormStyles'
import Button from '../../UI/Button/Button/ButtonComponent'

const ContactForm: FC = () => {
  const [form] = useForm()

  // const defaultFormValues = useCallback(() => {
  //   form.setFieldsValue({ name: '', email: '', message: '' })
  // }, [form])

  const handleSubmit = async () => {
    const variables = await form.validateFields()
    console.log(variables)
  }

  return (
    <ContactFormContainer
      form={form}
      layout="vertical"
      name="form_in_modal"
    >
      <ContactFormContainer.Item
        name="name"
        label="Nom"
        rules={[
          {
            required: true,
            message: 'Le nom est obligatoire!',
          },
          {
            min: 3,
            message: 'Entrez au moins 3 caractères!',
          },
        ]}
      >
        <Input
          placeholder="votre nom?"
        />
      </ContactFormContainer.Item>
      <ContactFormContainer.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Le mail est obligatoire!',
          },
          {
            type: 'email',
            message: 'Veuillez fournir un email valide!',
          },
        ]}
      >
        <Input
          placeholder="votre email?"
        />
      </ContactFormContainer.Item>
      <ContactFormContainer.Item
        name="message"
        label="Message"
        rules={[
          {
            required: true,
            message: 'Le message est obligatoire!',
          },
          {
            min: 6,
            message: 'Entrez au moins 6 caractères!',
          },
        ]}
      >
        <TextArea
          placeholder="de quoi allez-vous parler?"
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      </ContactFormContainer.Item>
      <Button
        text='envoyer le message'
        onClick={handleSubmit}
      />
    </ContactFormContainer>
  )
}

export default ContactForm
