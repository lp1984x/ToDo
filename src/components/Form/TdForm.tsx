import { Form, Button, Row, Col, InputGroup, Container } from "react-bootstrap";
import TdList from "../Tdlist/Tdlist";
import "./form.scss";

interface IProp {
  text: string;
  handleAction: () => void;
  updateText: (str: string) => void;
}

const TdForm: React.FC<IProp> = ({ updateText, handleAction, text }) => {
  return (
    <Container className="d-flex justify-content-center p-4">
      <Form className="col-6 p-3 ps-4 rounded-3 shadow">
        <Row className="d-flex justify-content-center">
          <Col className="">
            <InputGroup className="mb-2">
              <input
                className="form-control"
                autoFocus
                placeholder="What to do"
                value={text}
                onChange={(event) => {
                  updateText(event.target.value);
                }}
              />

              <Button
                variant="outline-primary"
                size="sm"
                onClick={handleAction}
                id="input-group-button-right"
              >
                add
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <TdList />
      </Form>
    </Container>
  );
};

export default TdForm;
