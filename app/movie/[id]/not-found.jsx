import Image from 'next/image'
import React from 'react'
import found from "../../../helper/images/found.gif"



const notfound = () => {
  return (
    <div>
      <Image src={found}></Image>
    </div>
  )
}

export default notfound
