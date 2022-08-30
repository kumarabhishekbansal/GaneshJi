import React from "react";

const Greetings = () => {
  return (
    <>
      <div className="greetdiv d-flex flex-column justify-content-center">
        <div className="greets d-flex justify-content-center align-items-center">
          <h1 className="greeth">Happy Ganesh Chaturthi </h1>
        </div>
        <div className="mantra d-flex justify-content-center align-items-center">
           <div className="d-flex flex-column align-items-center">
            <h1 className="mh">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</h1>
            <h1 className="mh">निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</h1>
           </div>
        </div>
      </div>
    </>
  );
};

export default Greetings;
