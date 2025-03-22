import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";


const Content = () => {
  const [fields, setFields] = useState([{ name: "", quntity: "" }]);
  const handleChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
  };
  const addField = () => {
    setFields([...fields, { name: "", quntity: "" }]);
  };
  const removeField = (index) => {
    if (fields.length > 1) {
      const newFields = fields.filter((_, i) => i !== index);
      setFields(newFields);
    }
};
const handleSubmit = (e) =>{
  e.preventDefault();
}
  return (
   
    <>
    <div className="border border-light-subtle bg-secondary-subtle p-3 mb-2 ">
      <Container>
        <Row className="bg-primary-subtle"  style={{ width: '90%' }}>
            <Col md={12}>
                <h3 className="text-center">Add Content</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <h5>Item Name</h5>
            </Col>
            <Col md={9}>
                <h5>Quntity</h5>
            </Col>
        </Row>
    <Form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <Row key={index} className="mb-3">
          <Col md={3}>
              <Form.Control
                type="text"
                name="name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
                placeholder="Type Item Name"
              />
          </Col>

          <Col md={7}> 
              <Form.Control
                type="text"
                name="quntity"
                value={field.quntity}
                onChange={(e) => handleChange(index, e)}
                placeholder="Type Item Quntity"
              />
          </Col>

          <Col md={2} className="d-flex align-items-end">
          {/* fields.length === 1 */}
            {index === 0 ? (
              <Button variant="primary" onClick={addField}>
               +
              </Button>
            ) : (
              <Button variant="danger" onClick={() => removeField(index)}>
                -
              </Button>
            )}
          </Col>
          
        </Row>
      ))}
      <Row>
          <Col>
          <Button type="submit" style={{ width: '88%' }} variant="info">Submit</Button>
          </Col>
          </Row>
    </Form>
    </Container>
    </div>
    </>
  );
};

export default Content;
