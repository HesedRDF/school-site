import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import BannerCol1 from "./BannerCol1";
import BannerCol2 from "./BannerCol2";
import BannerCol3 from "./BannerCol3";
function Banner() {
  return (
    <div class="bg-blue-100">
      <div class="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3">
        <div class="bg-green-400">
          <BannerCol1 />
        </div>
        <div class=" bg-orange-900">
          <BannerCol2 />
        </div>
        <div class="bg-purple-600">
          <BannerCol3 />
        </div>
      </div>
    </div>
  );
}

export default Banner;
