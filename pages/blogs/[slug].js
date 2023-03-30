import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap'
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import BlogHeader from 'components/BlogHeader';
import { PageLayout } from 'components/PageLayout';
import { BlogContent } from 'components/BlogContent';
import { urlFor } from 'lib/api'

const BlogDetail = ({ blog }) => {
  console.log(' Displaying page'); 
  const { query } = useRouter();
  return (
    <PageLayout>
        {/* <h1>Hello detail page - {blog?.slug}</h1> */}
        <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader 
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={blog.date}
          />
          <hr/>
          <BlogContent content={blog.content}/>
        </Col>
      </Row>
    </PageLayout>
    
  )
}

export async function getStaticProps({params}) {
    console.log(' Fetching blog by, ', params.slug); 
    const blog = await getBlogBySlug(params.slug)
    return {
        props: { blog }
    }
}

export async function getStaticPaths() {
  console.log(' Getting paths for every page');
  const blogs = await getAllBlogs();
  // const paths = ;
  return {
    paths: blogs.map( blog => ( { params: { slug: blog.slug} })),
    fallback: false
  }
}

export default BlogDetail;