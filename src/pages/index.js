import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this in gatsby tutorial!</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage