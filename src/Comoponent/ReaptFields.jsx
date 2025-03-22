import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons"
function ReaptFields(){
    const [data,setData] = useState([{namespace:'',key:'',value:'',paragraph:''}]);
    const handleChange = (index,e) => {
        // console.log(index,e.target.name);
        const values = [...data];
        values[index][e.target.name] = e.target.value;
        setData(values);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(" Submit Data :",data);
        
    }
    const handleAddField = () => {
        setData([...data, {namespace:'',key:'',value:'',paragraph:''}]);
    }
    const handleRemoveField = (index) => {
        const values = [...data];
        values.splice(index,1);
        setData(values);
    }
    return(
        <>
            <h3 className="text-center">Dynamic Fields</h3>
            <div className="border border-3 mx-5 py-2 rounded">
            <Button variant="success" onClick={handleAddField} className="mx-3">Add +</Button>
            <hr/>
            <div className="bg-secondary-subtle p-3 d-flex">
            <Form.Control
                placeholder="Search metafields by key,namespace or value"
                className="w-75 border-0" 
            /> 
            <Button className="mx-2">Search</Button> 
        </div>
        <hr/>
        <div className="mx-4 py-1">
            <Row>
                <Col md={1}>
                    <h6>Type</h6>
                </Col>
                <Col md={2}>
                    <h6>Namespace</h6>
                </Col>
                <Col md={2}>
                    <h6>key</h6>
                </Col>
                <Col md={4}>
                    <h6>Value</h6>
                </Col> 
            </Row>
        </div>
            <Form onSubmit={handleSubmit}>
                {data.map((inputField,index) => (
                    <div key={index}>
                        <Row className="mx-4 py-1">
                        <Col md={1}>
                        <Icon.CardList className="fs-2 text-dark spacer"/>
                        </Col>
                        <Col md={2}>
                        <Form.Control type="text" placeholder="Namespace" name="namespace" value={inputField.namespace} onChange={e => handleChange(index,e)}/>
                        </Col>
                        <Col md={2}>
                        <Form.Control type="text" placeholder="Key" name="key" value={inputField.key} onChange={e => handleChange(index,e)}/>
                        </Col>
                        <Col md={6}>
                        <Form.Control as="textarea" placeholder="Value" name="value" value={inputField.value} className="mb-3" style={{height:'50%'}} onChange={e => handleChange(index,e)}/>
                        </Col>
                        <Col>
                        <Button variant="danger" onClick={() => handleRemoveField(index)}>-</Button>
                        </Col>
                        </Row>
                        <Row className="border border-3 mx-4 py-1 rounded">
                        <h5 className="mx-2">paragraph</h5>
                        <hr/>
                        <Col>
                        <Form.Control className="border-0" type="textarea" placeholder="Enter paragraph" name="paragraph" value={inputField.paragraph} onChange={e => handleChange(index,e)}/>
                        </Col>
                        </Row>
                        <hr/>
                    </div>
                   
                ))}
                <Button onClick={handleSubmit}>submit</Button>
            </Form>
            </div>
        </>
    )
}
export default ReaptFields;