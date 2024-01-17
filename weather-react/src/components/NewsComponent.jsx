import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NewsComponent({ news }) {

  const navigate = useNavigate()

  return (
    <>
      <h5 onClick={() => navigate('/news')} className='text-primary mt-2 pt-3'>Guarda le ultime notizie!</h5>
      <Container>
        <Row>
          {news?.articles?.map((article, index) => (
            <Card className='mb-2 mx-3' key={index} style={{ width: '18rem' }}>
              <Card.Img style={{height: '15em'}} variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.author}, {article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}
