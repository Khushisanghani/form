import { Badge, Button, Col, Container, Row } from "react-bootstrap";

function SubmitData() {
  return (
    <>
     
        <div className="border border-3 mx-4 py-3 rounded">
        
            <Row>
                <Col>
                    <h6 className="bg-secondary-subtle m-1 rounded p-1 mx-1 " style={{width : '9%', height:'30px'}}>Metafields <Badge bg="secondary">0</Badge></h6>
                </Col>
            </Row>
        
        <hr/>
        </div>
     
    </>
  );
}
export default SubmitData;
