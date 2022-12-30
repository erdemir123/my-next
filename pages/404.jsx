import Image from 'next/image'
import React from 'react'
import notFound from "../helper/images/found.gif"

const pages404 = () => {
  return (
    <Image src={notFound}></Image>
  )
}

export default pages404
