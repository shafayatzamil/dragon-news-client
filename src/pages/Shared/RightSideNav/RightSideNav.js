import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsGoogle } from "react-icons/bs";
import { BsGithub ,BsFacebook,BsWhatsapp,BsTwitter} from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarosel from "../BrandCarosel/BrandCarosel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const {providerLogin}= useContext(AuthContext);
  const googleProvider= new GoogleAuthProvider();
  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user= result.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })

  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary mb-2">
          <BsGoogle></BsGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <BsGithub></BsGithub> Login With Github
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item ><BsFacebook></BsFacebook> Cras justo odio</ListGroup.Item>
          <ListGroup.Item><BsTwitter/>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item><BsTwitter/>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item><BsWhatsapp/>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>

      <div className="mt-4">
        <BrandCarosel></BrandCarosel>
      </div>
      
    </div>
  );
};

export default RightSideNav;
