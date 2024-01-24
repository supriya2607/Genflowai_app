import React from 'react'

function Adminnavbar({pageData}) {
  return (
    <ul>
    {
     pageData && <li><a href={pageData.url}> {pageData.type}</a></li>
    }
     
    </ul>
  )
}

export default Adminnavbar