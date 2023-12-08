interface Subroute {
  title: string
  link: string
}

interface Options {
  offerSubroutes?: Subroute[]
  serviceSubroutes?: Subroute[]
  categorySubroutes?: Subroute[]
}

export const baseURL = 'https://amir-metal.com'

const getSitemap = (options?: Options) => [
  {
    title: 'Oferta',
    link: '/oferta',
    subroutes: options?.offerSubroutes ?? [],
  },
  {
    title: 'Usługi',
    link: '/uslugi',
    subroutes: options?.serviceSubroutes ?? [],
  },
  {
    title: 'Katalog',
    link: '/katalog',
    subroutes: options?.categorySubroutes ?? [],
  },
  {
    title: 'O nas',
    link: '/o-nas',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
  {
    title: 'Kontakt',
    link: '/kontakt',
  },
]

export type Sitemap = ReturnType<typeof getSitemap>

export default getSitemap
