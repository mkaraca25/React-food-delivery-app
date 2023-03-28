import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import {SiTiktok} from 'react-icons/si'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import "../../styles/footer.css";

import { Link } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Taste of Home</h5>
              <p>Erzurum'a lezzet getiren adrestesiniz.</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Çalışma Saatlerimiz</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Pazartesi - Pazar</span>
                <p>10:00 - 00:00</p>
              </ListGroupItem>

              {/* <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem> */}
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Yerimiz</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Konum: Cumhuriyet cad. ,Erzurum</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 05395079658</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: melikkrc25@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Bülten</h5>
            <p>Haber bültenimize abone olun</p>
            <div className="newsletter">
              <input type="email" placeholder="E-posta adresinizi giriniz..." />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              &copy; 2023-{year}, Melik KARACA'ya ait web sitesi. Tüm Hakları
              Saklıdır.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Sosyal Medya Hesaplarımız: </p>
              
              <span>
                {" "}
                <Link to=" https://www.instagram.com/acimac">
                  <i><AiFillInstagram/></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to="https://www.facebook.com/acimac">
                  <i ><FaFacebookF/></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to=" https://www.tiktok.com/@acimac">
                  <i><SiTiktok/></i>
                </Link>{" "}
              </span>
              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/acimac">
                  <i ><BsYoutube/></i>
                </Link>{" "}
              </span>
              {/* <span>
                <Link to="https://github.com/acimac">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
