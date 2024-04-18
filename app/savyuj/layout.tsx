import React, { ReactNode } from 'react'
import { Navbar } from '@/components/pages/navbar'
import { Footer } from '@/components/pages/footer'
const Savyuj = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Savyuj