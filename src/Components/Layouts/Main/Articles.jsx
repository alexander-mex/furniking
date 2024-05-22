import React from 'react';
import { Link } from 'react-scroll';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../styles/Articles.css';
import ArtImg1 from '../../../images/article__card-img1.png';
import ArtImg2 from '../../../images/article__card-img2.png';
import ArtImg3 from '../../../images/article__card-img3.png';
import ArtImg4 from '../../../images/article__card-img4.png';

const ArticlesData = [
  {
    ImgSrc1: ArtImg1,
    ImgSrc2: ArtImg2,
    ImgSrc3: ArtImg3,
    ImgSrc4: ArtImg4,
    tagFurniture: 'Furniture',
    tagTable: 'Table',
    tagBench: 'Bench',
    tagChair: 'Chair',
    Date: '22 September 2023',
    titleFurniture: "Beginner's guide to buying a minimal sofa",
    titleTable: 'Buying best minimal computer table',
    titleBench: 'How to choose best modern bench',
    titleChair: 'Best Summer Outfit Style in this Country',
    link: 'Read more',
  }
]

const Articles = () => {
  return (
    <div className="wrapper">
      <Container>
        <div className="latest">
          <h2 className="trends-title review-title">
            Our Latest Articles
          </h2>
          <Row className="latest-items">
            {ArticlesData.map((article, index) => (
              <Col key={index}>
                <Card className="latest-item">
                  <Card.Img src={article.ImgSrc1} alt="" />
                  <Card.Body className="latest-content">
                    <div className="latest-tag">
                      <Link to="!#" className="latest-link">
                        <i className="fa-solid fa-tag latest-icon"></i>{article.tagFurniture}
                      </Link>
                      <span className="latest-span">{article.Date}</span>
                    </div>
                    <Card.Title className="latest-title">
                      {article.titleFurniture}
                    </Card.Title>
                    <Link to="!#" className="latest-linkMore">
                      {article.link}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {ArticlesData.map((article, index) => (
              <Col key={index}>
                <Card className="latest-item">
                  <Card.Img src={article.ImgSrc2} alt="" />
                  <Card.Body className="latest-content">
                    <div className="latest-tag">
                      <Link to="!#" className="latest-link">
                        <i className="fa-solid fa-tag latest-icon"></i>{article.tagTable}
                      </Link>
                      <span className="latest-span">{article.Date}</span>
                    </div>
                    <Card.Title className="latest-title">
                      {article.titleTable}
                    </Card.Title>
                    <Link to="!#" className="latest-linkMore">
                      {article.link}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {ArticlesData.map((article, index) => (
              <Col key={index}>
                <Card className="latest-item">
                  <Card.Img src={article.ImgSrc3} alt="" />
                  <Card.Body className="latest-content">
                    <div className="latest-tag">
                      <Link to="!#" className="latest-link">
                        <i className="fa-solid fa-tag latest-icon"></i>{article.tagBench}
                      </Link>
                      <span className="latest-span">{article.Date}</span>
                    </div>
                    <Card.Title className="latest-title">
                      {article.titleBench}
                    </Card.Title>
                    <Link to="!#" className="latest-linkMore">
                      {article.link}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {ArticlesData.map((article, index) => (
              <Col key={index}>
                <Card className="latest-item">
                  <Card.Img src={article.ImgSrc4} alt="" />
                  <Card.Body className="latest-content">
                    <div className="latest-tag">
                      <Link to="!#" className="latest-link">
                        <i className="fa-solid fa-tag latest-icon"></i>{article.tagChair}
                      </Link>
                      <span className="latest-span">{article.Date}</span>
                    </div>
                    <Card.Title className="latest-title">
                      {article.titleChair}
                    </Card.Title>
                    <Link to="!#" className="latest-linkMore">
                      {article.link}
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Articles;
