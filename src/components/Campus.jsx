import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import campus from "../../src/assets/images/campus-gallery.jpg";
function Campus() {
  return (
    <div class="border-y bg-yellow-50 py-20">
      <div class="w-11/12 lg:w-4/5 mx-auto">
        <h2 class="shadows-into-light text-2xl lg:text-4xl text-center font-bold">
          HESED CAMPUS
        </h2>
        <div class="bg-black w-20 h-0.5 mx-auto">&nbsp;</div>
        <div class="lg:my-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="lg:pt-24">
            <div class="w-6 h-6 bg-red-600 -ml-20">&nbsp;</div>
            <p class="text-lg pr-6">
              Hesed Academy has excellent facilities and is situated in a very
              serene environment conducive for learning and the development of
              the mind.
            </p>
            <div class="w-6 h-6 bg-green-600 float-right rounded-full">
              &nbsp;
            </div>
            <div class="pt-8 text-center lg:text-left">
              <A href="#" class="bg-blue-600 text-white p-4 hover:opacity-60">
                View Campus Gallery
              </A>
            </div>
          </div>
          <div>
            <img src={campus} class="-ml-8" />
            <div class="bg-orange-400 h-36 w-20 -mt-28 float-right">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campus;
