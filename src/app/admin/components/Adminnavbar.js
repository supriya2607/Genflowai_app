import React from 'react'

function Adminnavbar({pageData}) {
  return (
    <div>
    <div className='adminheader'>

    </div>
    <ul className='page_title'>
    {
     pageData && <li><a href={pageData.url}> {pageData.type}</a></li>
    }
     
    </ul>
    </div>
  )
}

export default Adminnavbar