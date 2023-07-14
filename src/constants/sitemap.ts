interface Subroute {
  title: string
  link: string
}

interface Options {
  offerSubroutes?: Subroute[]
}

const getSitemap = (options?: Options) => [
  {
    title: 'Oferta',
    link: '/oferta',
    subroutes: options?.offerSubroutes ?? [],
  },
  {
    title: 'Realizacje',
    link: '/realizacje',
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
