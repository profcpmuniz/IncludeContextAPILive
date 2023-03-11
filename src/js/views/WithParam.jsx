import React from 'react'
import { useParams } from 'react-router'

export const WithParam = () => {
    const params = useParams()
  return (
    <div>WithParam: {params.id}</div>
  )
}
