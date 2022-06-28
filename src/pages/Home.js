import React from 'react'
import HomePageContainerOne from '../Containers/HomePage/container-1'
import HomePageContainerTwo from '../Containers/HomePage/container-2'
import HomePageContainerThree from '../Containers/HomePage/container-3'
import HomePageContainerFour from '../Containers/HomePage/container-4'

export default function Home() {
  return (
    <>
      <div className="container">
        <HomePageContainerOne/>
        <HomePageContainerTwo/>
        <HomePageContainerThree/>
        <HomePageContainerFour/>
      </div>
    </>
  )
}
