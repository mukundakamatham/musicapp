import { useState ,useEffect} from 'react';
import{ Navbar,Container,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap'
import axios from "axios";
import "./songs.css"
import {
   
    useParams
  } from "react-router-dom";
export const SongsList=()=>{
  let { id } = useParams();
  const [data, setdata] = useState([])
  const [input, setinput] = useState("");
 
const [datas, setdatas] = useState([])
const handleChange=(e)=>{
  setinput(e.target.value)
}



async function getUser() {
    // try {
    //   const response = await axios.get(`http://localhost:2345/album/${input}`);
    //   setdatas(response);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  useEffect(() => {
    albumsongs()
  }, []);
  const albumsongs=async()=>{
    
 
  try {
    const response = await axios.get(`http://localhost:2345/album/${id}`);
    setdata(response);
  } catch (error) {
    console.error(error);
  }
}

  
   
  return (
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
    
    
    <div id="con">
      {data.map((e)=>(
        <div id="song">
          <div>song name : {e.title}</div>
          <div>artist name : {e.artist}</div>
          <div>song duration : {e.duration}</div>
        </div>
      ))}
    </div>
    </>
  )
}