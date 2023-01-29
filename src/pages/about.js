import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About">
                <p>Hi!</p>
            </Layout>
        </main>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage