import styled from '../Theme/themed-components'
import { useState, useEffect } from 'react'
import Header from "./Header";
import Section1 from "./Section1"

const Layout = () =>{
  return(
    <>
      <Header getStockType={getStockType}></Header>
      <div>
        <main>

          <Section1 />
          
        </main>
      </div>
    </>
  )
}

export default Layout