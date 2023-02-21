import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostById: builder.query<IPost, number>({
      query: (id) => `posts/${id}`
    })
  })
})

export const { useGetPostByIdQuery } = postApi
