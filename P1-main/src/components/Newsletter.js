import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Do not hesitate to ask me anything..<br></br></h3>
          </Col>
          <Col md={6} xl={7}>
            <p style={{ textAlign: 'right' }}>You can also reach out at [krishnangshu.paul2003@gmail.com]</p>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
