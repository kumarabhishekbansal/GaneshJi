import React from 'react'
import Imgs from './Imgs'
import Greetings from './Greetings'
import Centerimg from './Centerimg'
import Quotes from './Quotes'
import Circleimg from './Circleimg'
const Home = () => {
  return (
    <>
          {/* <div className="bg1"></div> */}
        <div className="main_cont d-flex justify-content-between">
        <div className="div1 d-flex flex-column">
                    <Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs />
            </div>

            <div className="div2 d-flex flex-column">
            <div className="divv2_1">
                <Greetings />
            </div>

            <div className="divv2_2">
                <Centerimg />
            </div>

            <div className="divv2_3">
      
                <Quotes />
            </div>
           
          <div className="divv2_4">
                  <Circleimg />
          </div>           
            
            </div>
            <div className="div3 d-flex flex-column">
                
                  <Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs /><Imgs />
                  
            </div>
        </div>
    </>
  )
}

export default Home