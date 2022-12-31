import Image from 'next/image'
import React from 'react'
import Load from "../../helper/images/loading.gif"

const Loading = () => {
  return (
    <Image src={Load} style={{margin:"0 auto"}}/>
  )
}

export default Loading
