import {Container} from 'react-bootstrap'
import Head from 'next/head'
import BlogNavbar from './Navbar'

export const PageLayout = ({children, className}) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&family=Open+Sans:wght@300;400&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <BlogNavbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <div>
            <a href='#'>courses</a>
            {' | '}
            <a href='#'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
    </>
  )
}
