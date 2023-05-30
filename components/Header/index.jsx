import React from 'react'
import { Row, Col } from "react-bootstrap";

export const Header = () => {
  return (
    <div>
        <Row>
          <Col className='m-5'>
            <center>
              <h2>TODO LIST</h2>
            </center>
          </Col>
        </Row>
    </div>
  )
}
