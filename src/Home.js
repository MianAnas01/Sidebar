import React, { useContext } from 'react'
import { FaBars, FaMapPin } from 'react-icons/fa'
import { AppContext } from './Context'

const Home = () => {
const data = useContext(AppContext )
console.log(data)
  return (
 <main>
<button className="sidebar-toggle">
    <FaBars />
</button>
<button className="btn">show modal
</button>

 </main>
)}

export default Home