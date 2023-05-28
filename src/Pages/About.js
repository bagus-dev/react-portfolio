import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

class About extends React.Component {
    render() {
        return (
            <div className="row mt-3">
                <div className="col-md-4">
                    <Image src="./photo.png" fluid />
                </div>
                <div className="col-md-8">
                    <h1>Bagus Puji Rahardjo</h1>
                    <hr />
                    <h4>Software Engineer at PT Bayu Buana, Tbk</h4>

                    <p className="mt-4 text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum animi et suscipit, quo expedita obcaecati ducimus voluptas quos voluptatibus repellendus quae exercitationem nostrum nihil fugiat. Deleniti libero magnam omnis blanditiis?
                    </p>

                    <p className="mt-4 text-secondary">
                    <Link to="tel:087873870194" className="text-decoration-none" target="_blank"><FontAwesomeIcon icon={faPhone} className="text-primary" /> 087873870194</Link>
                    </p>
                    <p className="mt-1 text-secondary">
                        <Link to="mailto:bagusrahardjo6@gmail.com" className="text-decoration-none" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="text-primary" /> bagusrahardjo6@gmail.com</Link>
                    </p>
                    <p className="mt-1 text-secondary">
                        <Link to="https://www.linkedin.com/in/bagus-p-rahardjo/" className="text-decoration-none" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-primary" /> Bagus Puji Rahardjo</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default About