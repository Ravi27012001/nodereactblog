import React, { createContext, useState ,useEffect } from 'react'
import axios from 'axios'
export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([]);

   useEffect(()=>{

    const alldata = async()=>{
      const users= await axios("https://raviidhoni.herokuapp.com/outh/data")
      console.log(users);
       setDetails(users.data)
  }
  alldata();
  },[])

  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details
