import React from 'react'
import g1 from '../Images/g1.jpg'
import aud1 from '../Images/aud1.mp3'
import aud2 from '../Images/aud2.mp3'
import aud3 from '../Images/aud3.mp3'
import g3 from '../Images/g3.jpg'
import g4 from '../Images/g4.jpg'
const Circleimg = () => {
  const audio1=new Audio(aud1);
  const audio2=new Audio(aud2);
  const audio3=new Audio(aud3);
  const ongo1=()=>{
    audio2.pause();
    audio3.pause();
    audio1.play();
  }
  const ongo2=()=>{
    audio2.play();
    audio3.pause();
    audio1.pause();
  }
  const ongo3=()=>{
    audio2.pause();
    audio3.play();
    audio1.pause();
  }
  return (
    <>
        <div className="circle_div">
            <div className="cirimg" style={{backgroundImage:`url(${g1})`,cursor:"pointer"}}
            onClick={ongo1}>
            </div>
            <h2>Click On Above Photo</h2>
        </div>

        <div className="circle_div">
            <div className="cirimg" style={{backgroundImage:`url(${g3})`,cursor:"pointer"}}
            onClick={ongo2}>
            </div>
            <h2>Click On Above Photo</h2>
        </div>


        <div className="circle_div">
            <div className="cirimg" style={{backgroundImage:`url(${g4})`,cursor:"pointer"}}
            onClick={ongo3}>
            </div>
            <h2>Click On Above Photo</h2>
        </div>
    </>
  )
}

export default Circleimg