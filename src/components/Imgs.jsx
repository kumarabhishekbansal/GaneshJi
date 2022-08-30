import React from 'react'
import gs2 from '../Images/gs2.jpg'
import g2 from '../Images/g2.jpg'
const Imgs = () => {
  return (
   <>
     <div className="imagess w-100 d-flex">
            <img src={gs2} alt="img" className='i1' />
            <img src={g2} alt="img" className='i1' />
            {/* <img src={g3} alt="img" className='i1' />
            <img src={g4} alt="img" className='i1' /> */}
     </div>
   </>
  )
}

export default Imgs