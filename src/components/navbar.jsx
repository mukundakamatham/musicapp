import { useState,UseEffect } from "react";
import axios from "axios";
import{ Navbar,Container,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap'
import {Album} from "./album"
export  const Music=()=>{

const [input, setinput] = useState("");
  UseEffect(() => {
    getUsers()
  
}, [])
const [data, setdata] = useState([])
const handleChange=(e)=>{
  setinput(e.target.value)
}
async function getUser() {
    try {
      const response = await axios.get(`http://localhost:2345/album/${input}`);
      setdata(response);
    } catch (error) {
      console.error(error);
    }
  }

 
async function getUsers() {
  try {
    const response = await axios.get(`http://localhost:2345/album/`);
    setdata(response);
  } catch (error) {
    console.error(error);
  }
}




    return(
<>
<Navbar bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">My Music App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* <Nav.Link href="#action1">Login</Nav.Link>
        <Nav.Link href="#action2">signup</Nav.Link> */}
        <NavDropdown title="Account" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action4">log out</NavDropdown.Item>
       
          {/* <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item> */}
        </NavDropdown>
      
      </Nav>
      <Form className="d-flex" >
        <FormControl
          type="search"
          onChange={handleChange}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={getUser} variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


<Album data={data}/>

</>



    )
}