import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  // this was also used to for the loader data
  const data = useLoaderData()
    
  
  // const [data, setData] = React.useState({})

  // React.useEffect(() =>{
  //     fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((res) => res.json())
  //     .then((data) =>{
  //       console.log(data)
  //       setData(data)
  //     })
  // }, [])

  return (
    <div className='w-full bg-gray-500 text-center text-white m-4 py-4 text-3xl'>
      Github name : {data.name}
       <img src={data.avatar_url} width={300} alt=''/>
    </div>
  )
}

export default Github


// this is usd to set the component to loader the data even before opening
export const dataFirstLoader = async () =>{
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}