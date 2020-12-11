import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About us</h1>
    <p className="about-text">
    CSCODERSHUB is a community of coders and cyber security enthusiasts, here we believe in sharing/discussing our knowledge with other members for enhancement and learning. We provide free guidance to beginners of the community. CSCODERSHUB team consists of hardworking and focused members who are ready to serve for the community without any personal benefit. We are dedicated towards building a community which can provide opportunity to members (beginners) to learn more about new technologies for free of cost.
    Anyone can Join Us as a member or as a team. for more details contact <a href="cscodershub@gmail.com">cscodershub@gmail.com</a> and <a href="admin@cscodershub.tech">admin@cscodershub.tech</a>
    </p>
  </Layout>
)

export default AboutPage
