import React from "react";
import Navi from "./Navi";

import {Container,Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Navi></Navi>
      <Container>
						<Row>
              <Col xs="3">
                <Navi></Navi>
              </Col>

              <Col xs="3">
                <Navi></Navi>
              </Col>
							
						</Row>
			</Container>
    </div>
 
  );
}

export default App;
