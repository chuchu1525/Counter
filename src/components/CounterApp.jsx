import { useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card
        className="p-4 shadow-lg rounded-3 text-center text-white bg-dark"
        style={{ width: "25rem" }}
      >
        <Card.Body>
          <Card.Title className="fs-4 fw-bold mb-3">Counter App</Card.Title>
          <Card.Text className="fs-3 fw-semibold mb-3">{count}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              variant="danger"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
              className="me-2"
            >
              Decrement
            </Button>
            <Button
              variant="secondary"
              onClick={() => setCount(0)}
              className="me-2"
            >
              Reset
            </Button>
            <Button variant="primary" onClick={() => setCount(count + 1)}>
              Increment
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
