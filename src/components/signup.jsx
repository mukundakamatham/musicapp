import {useState} from "react"
import Form from 'react-bootstrap/Form'
import {Button} from  'react-bootstrap';
import { Redirect } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { signinUser } from "../Redux/auth/action";
export const SigninPage=()=>{
    
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    const { isAuth, isLoading  } = useSelector(
      (state) => state.auth,
      shallowEqual
    );
   const handlechange=(e)=>{
    setpassword(e.target.value)
   }
   const handlechange2=(e)=>{
    setname(e.target.value)
   }
   const handlechange1=(e)=>{
    setemail(e.target.value)
   }
    const handleLogin = () => {
      dispatch(signinUser({ email, password,name }));
    };
    if (isAuth) {
      return <Redirect to="/" />;
    }
    if (isLoading) {
      return <div>...loading</div>;
    }
    return (
        <Form>
             <Form.Group className="mb-3" >
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" onChange={handlechange2}placeholder="Name" />
  </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={handlechange}placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  onChange={handlechange1} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={handlechange}placeholder="Password" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary"  onClick={handleLogin} type="submit">
    Submit
  </Button>
</Form>
    )
}