import React from 'react'
import Link from 'next/link'
import {Posts} from '../../types/Posts'
import {ROUTES} from '../../../../constants'

interface Props {
  loading: boolean
  error: any
  data?: Posts,
  handleLoadMore: (cursor: string|null) => void
}

export const Timeline = ({loading, error, data, handleLoadMore}: Props) => {
  if (loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      {
        data!.posts.edges.map((edge) => {
          const {
            node: post
          } = edge

          return (
            <h2 key={post.id}>
              <Link
                href={{pathname: ROUTES.APP.page, query: {id: post.id}}}
                as={`/${post.id}`}
              >
                <a>
                  {post.text}
                </a>
              </Link>
            </h2>
          )
        })
      }
      <button
        onClick={() => handleLoadMore(data!.posts.pageInfo.endCursor)}
        disabled={!(data!.posts.pageInfo.hasNextPage)}
      >
        Load more
      </button>
    </div>
  )
}