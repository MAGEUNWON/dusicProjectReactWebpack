import styled from '../Theme/themed-components'
import { useState, useEffect } from 'react'
import Header from "./Header";
import Section1 from "./Section1"

interface getName {
  (type:string) : void
}


const Layout = () =>{

    const [name, setName] = useState("KOSPI");
    const getStockType :getName = (type) => {
      setName(type)
    }
    console.log(name)
  return(
    <>
      <Header name={getStockType}></Header>
      <div>
        <main>

          <Section1 />
          
        </main>
      </div>
    </>
  )
}

export default Layout