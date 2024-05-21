import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

function Apply() {
  return (
    <MetaProvider>
      <Title>Apply - Hesed Academy</Title>
      <Link rel="canonical" href="https://hesedacademy.net/" />
      <Meta
        name="description"
        content="Apply to Hesed Academy, Jos - Plateau State, Nigeria."
      />
      <div>
        <Header />
        <div>
          <div class="gray_bg text-center py-10">
            <span class="shadows-into-light topic text-3xl lg:text-4xl">
              Online Application Form
            </span>
          </div>
          <div class="w-11/12 lg:w-10/12 mx-auto my-20 border-2 rounded-lg p-3 lg:p-6 space-y-10 text-sm lg:text-lg">
            <p class="border-b-2 border-yellow-400 pb-10">&nbsp;</p>
            <div>d</div>
          </div>
        </div>
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default Apply;
