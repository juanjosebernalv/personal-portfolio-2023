import { useEffect, useState } from 'react';
import {Row, Col, Image, Card} from 'react-bootstrap';
import {PageLayout} from 'components/PageLayout';
import { AuthorIntro } from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import { getAllBlogs } from 'lib/api';
import FilteringMenu from 'components/FilteringMenu';
import { useGetBlogs } from 'actions';

export default function Home({message, blogs}) {

  const [filter, setFilter] = useState({
    view: {
      list: 0
    }
  });

  const { data: blogsData, error } = useGetBlogs()

  if (error) return <div>failed to load</div>
  if (!blogsData) return <div>loading...</div>
  // if (data) alert(data)
  // debugger;
  // useEffect(() => {
  //   async function fetchBlogs() {
  //     const blogs = await getAllBlogs();
  //     return blogs;
  //   }
  //   fetchBlogs();
  // }, [])


  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter( { ...filter, [option]: value } )
        }}/>
      {/* {message} */}
      {/* <pre>
        {JSON.stringify(blogs)}
      </pre> */}
      <hr />
      <Row className='mb-5'>
        <Col md='10'>
          <CardListItem />
        </Col>
        {
          filter.view.list
            ?
            <Col className='mb-9'>
              <CardListItem />
            </Col>
            :
            blogsData.map( blog =>
                <Col key={blog.slug} md='4'>
                  <CardItem
                    key={`CI ${blog.slug}`}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    image={blog.coverImage}
                    author={blog.author}
                    slug={blog.slug}
                    />
                </Col>
            )
        }

      </Row>
    </PageLayout>
  )
}

// this function is called during the build (build time)
// Provides props to your page
// it will create static content
export async function getStaticProps() {
  console.log('static props');
  // const
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}