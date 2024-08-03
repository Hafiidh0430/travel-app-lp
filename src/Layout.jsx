import React from 'react'

export default function layout({children}) {
  return (
    <>
      <div className="layout mt-10 mx-[2rem] md:mx-[4rem] lg:mx-[8rem]">
        <div className="wrapper-layout">{children}</div>
      </div>
    </>
  )
}
