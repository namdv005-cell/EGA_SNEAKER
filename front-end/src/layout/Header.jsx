import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Header = () => {
  const [menu, setMenuData] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4000/menu')
    .then((Response) => setMenuData(Response.data.menu))
    .catch((Error) => console.error("Error fetching menu data:", Error));
  }, [])
  return (
    <>

    </>
  )
}

export default Header
                                                                                                                   