import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this in gatsby tutorial!</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../../public/images/_MG_2709.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage