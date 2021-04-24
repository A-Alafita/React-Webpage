import { Form, Button, FormGroup, FormControl, ControlLabel, Col, InputGroup } from "react-bootstrap";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function UserProfile(){
    return(
        <Form>
            <Form.Row className="align-items-center">
            <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" srOnly>Name</Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
            </Col>
            <Col sm={3} className="my-1">
                <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>Username</Form.Label>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                </InputGroup>
            </Col>
            <Col xs="auto" className="my-1">
                <Form.Check type="checkbox" id="autoSizingCheck2" label="Remember me" />
            </Col>
            <Col xs="auto" className="my-1">
                <Button type="submit">Submit</Button>
            </Col>
            </Form.Row>
        </Form>
    )
}

export default UserProfile;