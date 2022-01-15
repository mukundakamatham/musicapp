import {useState} from "react";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  useHistory 
  // useRouteMatch,
  // useParams
 } from "react-router-dom";
 import "./album.css"
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap'
export const Album=(data)=>{
    const [datas] = useState(data)
    function saveData(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    }
return (

<div className="mainboxes">
{datas.map((e)=>(
   

   <Link to={`/SongsList/${e.album}`}>
<Card style={{ width: '18rem' }} onclick={saveData("id",e._id)}>
  <Card.Img variant="top" src={e.image_urls} />
  <Card.Body>
    <Card.Title>{e.album}</Card.Title>
   
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>Genre : {e.genre}</ListGroupItem>
  <ListGroupItem>year : {e.year}</ListGroupItem>
  <ListGroupItem>Artist : {e.artist}</ListGroupItem>

  </ListGroup>
  
</Card>
</Link> 
))}




</div>



)
}