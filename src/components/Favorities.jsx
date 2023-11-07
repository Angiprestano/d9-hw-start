import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeButtonFromList } from "../Redux/Action";

const Favorities = (i) => {
  const FavoritList = useSelector((state) => state.list.content);
  const dispacht = useDispatch();
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <ListGroup>
            {FavoritList.map((fav, i) => (
              <ListGroup.Item key={i}>
                <Link to={`/${fav}`}>{fav}</Link>
                <Button
                  variant="danger ms-3 fs-6"
                  onClick={() => {
                    dispacht(removeButtonFromList(i));
                  }}
                >
                  DELETE
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorities;
