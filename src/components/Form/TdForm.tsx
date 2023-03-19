import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import TdList from "../Tdlist/Tdlist";
import "./form.scss";

interface IProp {
  text: string;
  handleAction: () => void;
  updateText: (str: string) => void;
}

const TdForm: React.FC<IProp> = ({ updateText, handleAction, text }) => {
  return (
    <Form className="col-12 col-md-6 p-3 ps-4 rounded-3 shadow wrap">
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
  );
};

export default TdForm;
