import { createElement } from 'react'

type ComponentMap = Record<string, (...args: any) => any>

export default function blocksMapperFactory<TMap extends ComponentMap>(contentTypeMap: TMap) {
  function factory<TypeName extends keyof TMap>({
    typeName,
    props,
  }: {
    typeName: TypeName
    props: Parameters<TMap[TypeName]>[0]
  }) {
    console.log({ typeName, props })
    const Component = contentTypeMap[typeName]

    if (!Component) {
      return null
    }

    console.log({ typeName })

    return createElement(Component, props)
  }

  return factory
}
