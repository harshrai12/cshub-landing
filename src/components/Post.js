import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"
import Img from "gatsby-image"
import abhisar from "../images/WhatsApp Image 2020-06-27 at 10.48.43 PM.jpeg"

const Post = ({ title, author, path, date,fluid}) => {
  return (
    <Card>
     <Img className="card-top" fluid={fluid}/>
      <CardBody>
      <div className="dpborder"><img src={abhisar} className="dp" alt="dp" /></div>
        <CardTitle>{title}</CardTitle>
        
        
        <CardSubtitle>
          <span className="infos">{date}</span> by{" "}
          <span className="infos">{author}</span>
        </CardSubtitle>
        <CardText></CardText>
        <Link to={`/SinglePost/${path}`}>
          <button type="button" class="btn btn-outline-success float-right">
            Read more
          </button>
        </Link>
      </CardBody>
    </Card>
  )
}

export default Post
