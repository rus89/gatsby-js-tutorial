import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <main>
            <Layout pageTitle="About">
                <p>Hi!</p>
            </Layout>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage