import React from 'react'

const PodcastDetail = ({ params } : { params: { podcastid: string }}) => {
  return (
    <p className='text-white-1'>PodcastDetail for {params.podcastid}</p>
  )
}

export default PodcastDetail 