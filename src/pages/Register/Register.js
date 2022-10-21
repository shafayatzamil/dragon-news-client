import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser ,updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name,photoUrl);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
 
  const handleUpdateUserProfile=(name,photoUrl)=>{
    const profile={
        displayName: name,
        photoURL: photoUrl
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(eroor=>{})

  }
  const handleAccpted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control name="name" type="text" placeholder="enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your photoUrl</Form.Label>
        <Form.Control
          type="text"
          name="photoUrl"
          placeholder="Enter PhotoUrl"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleAccpted}
          type="checkbox"
          label={
            <>
              Accpeted the <Link to="/terms">term and condition </Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
      <Form.Text className="text-danger">
        <p>{error}</p>
      </Form.Text>
    </Form>
  );
};

export default Register;
