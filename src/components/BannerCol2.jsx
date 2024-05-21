import { Show, createSignal } from "solid-js";
import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import mission_1 from "../../src/assets/images/vision-mission-mandate-01.jpg";
import mission_2 from "../../src/assets/images/vision-mission-mandate-02.jpg";
function BannerCol2() {
  var myIndex = 0;

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
      myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
  createEffect(() => carousel());
  return (
    <div class="flex flex-col lg:flex-col-reverse">
      <div>
        <img src={mission_1} class="mySlides2 w-full" />
        <img src={mission_2} class="mySlides2 w-full" />
      </div>
      <A href="#" class="block uppercase py-14 hover:opacity-60">
        <h2 class="text-center text-white text-xl lg:text-xl">
          LEARN ABOUT OUT
        </h2>
        <h1 class="text-2xl lg:text-2xl font-bold w-4/5 mb-4 mx-auto text-center text-orange-100">
          VISION, MISSION, & MANDATE
        </h1>
        <div class="w-1/2 h-0.5 bg-black mx-auto">&nbsp;</div>
      </A>
    </div>
  );
}

export default BannerCol2;
