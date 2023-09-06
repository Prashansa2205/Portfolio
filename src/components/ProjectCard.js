import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, navigate }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <a className = "navlink" href={navigate} target="_blank" style = {{textDecoration:"none"}}>
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        </div>
    </Col>
  )
}
