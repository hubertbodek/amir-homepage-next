const typeToRouteMap: Record<string, string> = {
  product: '/produkt/[slug]',
  article: '/blog/[slug]',
  service: '/uslugi/[slug]',
  offer: '/oferta/[slug]',
  ProductsListPage: '/katalog',
  OfferListPage: '/oferta',
  ServicesListPage: '/uslugi',
  AboutUsPage: '/o-nas',
  ContactPage: '/kontakt',
}

const typeToRevalidatePathMap: Record<string, string[]> = {
  product: [typeToRouteMap.product, '/katalog'],
  article: [typeToRouteMap.article, '/blog'],
  service: [typeToRouteMap.service, '/uslugi'],
  offer: [typeToRouteMap.offer, '/oferta'],
  ProductsListPage: [typeToRouteMap.ProductsListPage],
  OfferListPage: [typeToRouteMap.OfferListPage],
  ServicesListPage: [typeToRouteMap.ServicesListPage],
  AboutUsPage: [typeToRouteMap.AboutUsPage],
  ContactPage: [typeToRouteMap.ContactPage],
}

export const mapContentToRoute = (type: string, slug?: string | null) => {
  const route = typeToRouteMap[type]

  if (!route) {
    throw new Error(`No route found for type ${type}`)
  }

  return replaceSlugInRoute(route, slug)
}

export const mapContentToRevlidate = (type: string) => {
  return typeToRevalidatePathMap[type] ?? null
}

export const replaceSlugInRoute = (route: string, slug?: string | null) => {
  if (!slug) {
    return route
  }

  return route.replace('[slug]', slug)
}
