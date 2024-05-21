import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

function About() {
  return (
    <MetaProvider>
      <Title>About Us - Hesed Academy</Title>
      <Link rel="canonical" href="https://hesedacademy.net/" />
      <Meta
        name="description"
        content="About Hesed Academy, Jos - Plateau State, Nigeria."
      />
      <div>
        <Header />
        <div>
          <div class="gray_bg text-center py-10">
            <span class="shadows-into-light topic text-3xl lg:text-4xl">
              About Us
            </span>
          </div>
          <div class="w-11/12 lg:w-10/12 mx-auto my-20 border-2 rounded-lg p-3 lg:p-6 space-y-10 text-sm lg:text-lg">
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Hesed Academy Motto
              </b>
              <br />
              Pro Deo et Patria (“For God and Country”)
            </p>
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Hesed Academy Vision
              </b>
              <br />A leading Christian educational centre of excellence raising
              competent Spirit-filled servant leaders transforming the diverse
              fields of human endeavour and society for human good and God’s
              glory.
            </p>
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Hesed Academy Mission
              </b>
              <br />
              To provide a Christ-honoring community in a salutary environment
              that prepares young people for life-long commitment to learning,
              professional excellence, moral virtue, discipleship, and servant
              leadership in all areas of life.
            </p>
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Hesed Academy Mandate
              </b>
              <br />
              To partner with parents in training and equipping their children
              as Christ’s ambassadors to transform His world into a free and
              prosperous society and to advance his kingdom through their
              virtuous and just living, and through competency in their calling.
            </p>
            <ul class="list-[square] border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Hesed Academy Core Values
              </b>
              <br />
              <li class="mx-8 my-2">Spirit-filled Living—discipleship</li>
              <li class="mx-8 my-2">Moral Virtue</li>
              <li class="mx-8 my-2">Truth</li>
              <li class="mx-8 my-2">Intellectual Curiosity</li>
              <li class="mx-8 my-2">Creativity</li>
              <li class="mx-8 my-2">Competency</li>
              <li class="mx-8 my-2">Justice</li>
              <li class="mx-8 my-2">Patriotism</li>
              <li class="mx-8 my-2">Servant Leadership</li>
            </ul>
            <ul class="list-decimal border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                Hesed Academy Distinctives
              </b>
              <br />
              <li class="mx-8 my-2">
                Our curriculum is locally rooted with a global outlook.
              </li>
              <li class="mx-8 my-2">
                In our curriculum, no field is left behind. We facilitate
                learning in Science, Technology, Engineering, Arts, and
                Mathematics.
              </li>
              <li class="mx-8 my-2">
                We operate a learner-centered philosophy of education with a
                hands-on approach to learning.
              </li>
              <li class="mx-8 my-2">
                We consciously maintain small class sizes so students receive
                individualized attention.
              </li>
              <li class="mx-8 my-2">
                We operate on Christian values and ethics, with strong emphasis
                on Christian discipleship.
              </li>
              <li class="mx-8 my-2">
                We are consciously raising future leaders for the market
                place/public square.
              </li>
              <li class="mx-8 my-2">
                We orient our students toward transformational servant
                leadership and patriotism.
              </li>
              <li class="mx-8 my-2">
                We have a competent, professional, loving, and caring faculty
                and staff team that models Christ-like character and
                professional competence for our students.
              </li>
              <li class="mx-8 my-2">
                Our prices are competitively favorable to the parents
                notwithstanding what we offer. You receive more than your
                money’s worth.
              </li>
            </ul>
            <p class="border-b-2 border-yellow-400 pb-10">
              <b class="merriweather text-lg lg:text-2xl font-normal">
                School Fees
              </b>
              <br />
              The fees at HESED Academy are affordably, competitive and a
              worthwhile investment for children who are given the opportunity
              to attend HESED academy.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default About;
