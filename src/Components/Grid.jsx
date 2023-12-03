import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LargeComp from './LargeComp';
import GridContainer from './GridContainer';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
            <GridContainer name={"1M+"} desc={"community members"} nameColor={"rgb(59, 131, 203)"}/>
            <div className='gid_container'>
                <LargeComp />
            </div>
        </Col>
        <Col>
            <LargeComp name={"1M+"} desc={"community members"} nameColor={"rgb(59, 131, 203)"}/>
        </Col>
        <Col>
            <LargeComp name={"1M+"} desc={"community members"} nameColor={"rgb(59, 131, 203)"}/>
        </Col>
      </Row>
      <Row>
        <Col>
            <LargeComp name={"1M+"} desc={"community members"} nameColor={"rgb(59, 131, 203)"}/>
        </Col>
        <Col>
            <LargeComp name={"1M+"} desc={"community members"} nameColor={"rgb(59, 131, 203)"}/>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;