export interface ContactPageType {
  title: string
  description: string
  Team: Array<{
    name: string
    people: Array<{
      name: string
      description: string
      email: string
      phone: string
    }>
  }>
}

const contactPage = {
  name: 'ContactPage',
  title: 'Kontakt',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł strony',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Opis strony',
      type: 'text',
    },
    {
      name: 'Team',
      title: 'Zespół',
      type: 'array',
      of: [
        {
          name: 'Department',
          title: 'Dział',
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Nazwa działu',
              type: 'string',
            },
            {
              name: 'people',
              title: 'Ludzie',
              type: 'array',
              of: [
                {
                  name: 'Person',
                  title: 'Osoba',
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Imię i nazwisko',
                      type: 'string',
                    },
                    {
                      name: 'description',
                      title: 'Opis',
                      type: 'string',
                    },
                    {
                      name: 'email',
                      title: 'E-mail',
                      type: 'string',
                    },
                    {
                      name: 'phone',
                      title: 'Telefon',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default contactPage
