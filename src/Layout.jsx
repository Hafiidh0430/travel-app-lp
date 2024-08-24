import React from 'react'
import Navigation from './components/Navigation'

export default function layout({children, is_nav}) {
  return (
    <>
    {/* <div className="max-md:mt-0 md:mt-10 lg:mt-10 mx-[4rem] max-md:mx-0 lg:mx-[6rem]">
        {is_nav && <Navigation/>}
    </div> */}
      <div className="layout mt-52">
        <div className="wrapper-layout mx-[4rem] max-md:mx-[2rem] lg:mx-[6rem]">{children}</div>
      </div>
    </>
  )
}
