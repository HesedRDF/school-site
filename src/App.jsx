import { A } from "@solidjs/router";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Campus from "./components/Campus";
import Proprietor from "./components/Proprietor";
import Pointers from "./components/Pointers";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";

function App() {
  return (
    <MetaProvider>
      <Title>Pro Deo et Patria - Hesed Academy</Title>
      <Link rel="canonical" href="https://hesedacademy.net/" />
      <Meta
        name="description"
        content="Welcome to Hesed Academy, Jos - Plateau State, Nigeria."
      />
      <div>
        <Header />
        <Banner />
        <Proprietor />
        <Campus />
        <Pointers />
        <Footer />
      </div>
    </MetaProvider>
  );
}

export default App;
