import React from 'react'


function Order({closeHour,openHour}) {
  return (
    <div className='order'>
  <p>We are open from{openHour}:00 to {closeHour}:00.Come visit Us Or Order Online</p>

<button className='btn'>Order</button>
    </div>
  )
}

export default Order