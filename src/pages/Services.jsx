import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

function Services() {
  return (
    <MetaProvider>
      <Title>Our Services - Hesed Academy</Title>
      <Link rel="canonical" href="https://hesedacademy.net/" />
      <Meta
        name="description"
        content="Our services at Hesed Academy, Jos - Plateau State, Nigeria."
      />
      <div>
        <Header />
        <div>
          <div class="gray_bg text-center py-10">
            <span class="shadows-into-light topic text-3xl lg:text-4xl">
              Our Services
            </span>
          </div>
          <div class="w-11/12 lg:w-10/12 mx-auto my-20 border-2 rounded-lg p-3 lg:p-6 space-y-10 text-sm lg:text-lg">
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Early Grade Learning
              </b>
              <br />
              <br />
              <b>
                <i>Crèche:</i>
              </b>
              <br />
              Our crèche provides professional care for children ages 6 months
              to below 3 years. We provide the basic daycare for those below
              18months and pre-school training for those 18 months and above.
              <br />
              Our care-givers are godly, well trained, and professional in their
              care of the children entrusted to them. We are conscious of the
              fact that learning begins from birth. Thus we strive to provide
              safe, caring, and stimulating environment and experiences to
              motivate and inspire the cognitive, social, and spiritual
              development of your children.
              <br />
              <br />
              <b>
                <i>Nursery School:</i>
              </b>
              <br /> Our nursery school program aims at supporting the
              psychomotor, social, emotional, linguistic, cognitive, and
              spiritual development of children ages 3–5 to facilitate their
              social and educational adjustment and thereby prepare them for
              primary education.
              <br />
              Our teachers offer hands-on creative learning experiences to
              enhance self-motivation and confidence, encourage cooperation,
              stimulate curiosity, and develop a life-long love for learning. At
              this stage the rudiments of the English language, Creative Arts,
              Numeracy, Health Habits, Civic Education, and the Christian faith
              are introduced in a developmental fashion from Nursery 1 to
              Nursery 3.
            </p>
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Primary Education
              </b>
              <br />
              <br />
              <b>
                <i>Secondary School:</i>
              </b>
              <br />
              Building on the foundation of primary education, our secondary
              school education facilitates learning in the sciences, technology,
              the arts, and mathematics as an enduring pedestal for further
              education and training. It aims to help students nurture their
              inquisitive and creative instincts, think critically, and make
              rational judgments. A leading Christian educational centre of
              excellence raising competent Spirit-filled servant leaders
              transforming the diverse fields of human endeavour and society for
              human good and God’s glory.
              <br />
              <br />
              Students are oriented towards building up their knowledge base and
              skills repertoire as well as cultivating attitudes and motivations
              necessary for self and career development, impactful service to
              society, and national development. They are also guided towards
              espousing sound moral values, life-long commitment to Christian
              discipleship, and leadership development so they will grow to be
              competent in their chosen career paths, spiritually mature, and
              socially well-adjusted and responsible citizens.
            </p>
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                School feeding Services
              </b>
              <br />
              We understand that our students are in their growing years, hence
              their need for a well-balanced diet. At the same time we are aware
              that young people eat food that is tasty not just healthy.
              Consequently, we ensure our menu is rich in the nutrients and
              micro-nutrients that make for healthy living, and our food is
              cooked to have an inviting aroma, be visually appealing,
              tastefully enjoyable, and in sufficient quantities.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Services;
