import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label className='contactTitle'>Lets talk about it.</Form.Label>
        <Form.Control as='textarea' rows={1} placeholder='My name is...' />
        <br />
        <Form.Control as='textarea' rows={1} placeholder='My email is...' />
        <br />
        <Form.Control
          as='textarea'
          rows={4}
          placeholder="I'm interested in working together"
        />
      </Form.Group>
      <div className='d-grid gap-2'>
        <Button variant='light' type='submit' size='lg'>
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
