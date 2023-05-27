import React from "react";
import { Container , Row , Col } from "react-bootstrap";
function Task() {
  return (
    

      <Row>
       <Col lg={4} className="m-auto p-0 mt-2">
    
        <p>About:My account:<span className="text-info"> Wishist: order tracking</span></p>
       </Col>
       <Col lg={4} className="m-auto p-0 mt-2">
        <p>Get Greate dervies to <span className="text-info">0% off view detail</span></p>
       </Col>
       <Col lg={2} className="m-auto p-0 mt-2 ms-3">
        Need help?ccall <span className="text-info">us=3800 908</span>
       </Col>
      <hr />
      </Row>

   
  );
}

export default Task;
