import Button from 'shared/components/Button'
import InputField from 'shared/components/form-elements/InputField'
import TextArea from 'shared/components/form-elements/TextArea'

export default function ContactForm() {
  return (
    <form>
      <InputField label="Imię i nazwisko" />
      <InputField label="Email" />
      <InputField label="Telefon" />
      <TextArea label="Wiadomość" rows={4} />
      <Button theme="primary" type="submit" className="w-full my-4">
        Wyślij
      </Button>
    </form>
  )
}
