import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { urlFor } from 'lib/api'

const CardItem = ({title, subtitle, date, image, author, slug}) => {
  return (
    <Card className={`fj-card`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          <img src={author?.avatar || 'https://via.placeholder.com/150'} className='rounded-circle mr-3' height='50px' width='50px' alt='avatar' />
          <div>
            <Card.Title className='font-weight-bold mb-1'>{author?.name || 'Anonymous'}</Card.Title>
            <Card.Text className='card-date'>{date}</Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img src={
            urlFor(image)
            .height(300)
            .crop('center')
            .fit('clip')
            .url()} alt='Card image cap' />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      <Link href={`/blogs/${slug}`} className='card-button'>
        Read More
      </Link>
    </Card>
  )
}

export default CardItem
