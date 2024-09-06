import { Freckle_Face } from 'next/font/google'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <>
    <div className='bg-green-300 w-60'>This is layout </div>
    <div>{children}</div>
    </>
  )
}

export default layout

