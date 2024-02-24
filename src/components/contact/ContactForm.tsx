import Button from 'components/shared/Button'
import InputField from 'components/shared/form-elements/InputField'
import TextArea from 'components/shared/form-elements/TextArea'

export default function ContactForm() {
  return (
    <form>
      <InputField label="Imię i nazwisko" />
      <InputField label="Email" />
      <InputField label="Telefon" />
      <TextArea label="Wiadomość" rows={4} />
      <Button theme="primary" type="submit" className="my-4 w-full">
        Wyślij
      </Button>
    </form>
  )
}
