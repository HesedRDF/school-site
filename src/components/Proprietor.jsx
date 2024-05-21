import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import proprietor from "../../src/assets/images/Professor-Cephas-Tushima-hrdg-president.jpg";
function Proprietor() {
  return (
    <div class="w-11/12 lg:w-6/12 my-20 mx-auto flex flex-col lg:flex-row">
      <div>
        <div class="w-80 mx-auto overflow-hidden  border-4 border-blue-950">
          <div>
            <img src={proprietor} class="w-full" />
          </div>
          <div class="p-4 text-center text-blue-950 text-xl font-bold">
            Prof. Cephas Tushima
          </div>
        </div>
      </div>
      <div class="-mt-4 lg:-mt-0 lg:py-10 grow">
        <div class="bg-blue-950 text-white p-6">
          <h2 class="shadows-into-light text-2xl lg:text-4xl text-center">
            PROPRIETOR'S WELCOME
          </h2>
          <div class="bg-white w-20 h-0.5 mx-auto">&nbsp;</div>
          <p class="text-sm my-4">
            Welcome to Hesed Aacademy. Our mandate is to partner with parents in
            training and equipping their children as Christ’s ambassadors to
            transform His world into a free and prosperous society and to
            advance his kingdom through virtuous and just...
          </p>
          <div class="alata pt-4">
            <A
              href="#"
              class="bg-orange-400 text-sm rounded-lg w-full inline-block text-center hover:opacity-60 uppercase p-2.5"
            >
              More about Hesed Academy
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proprietor;
