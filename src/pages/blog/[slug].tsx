import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export default function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{post}</div>
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      post: 'test',
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        slug: 'test',
      },
    },
  ]

  return {
    paths,
    fallback: false,
  }
}
