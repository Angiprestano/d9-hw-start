import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorities = () => {
  return (
    <Container>
      <Row>
        <Link path="/">Home</Link>
        <Col>Link</Col>
        <Col>Genius Group</Col>
      </Row>
    </Container>
  );
};

export default Favorities;
