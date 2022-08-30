import React from 'react'
import gs1 from '../Images/gs1.jpg'
import gs2 from '../Images/g2.jpg'
const Centerimg = () => {
  return (
    <>
        <div className='center_img_div'>
            <div className="cimg" style={{backgroundImage:`url(${gs1})`}}>
            {/* <img src={g3} alt="img" className='wi' /> */}
            </div>

            <div className="cimg">
            <div className="cimg" style={{backgroundImage:`url(${gs2})`}}></div>
            {/* <img src={g3} alt="img" className='wi' /> */}
            </div>
        </div>

    </>
  )
}

export default Centerimg