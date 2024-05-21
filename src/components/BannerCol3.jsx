import { Show, createSignal } from "solid-js";
import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import apply_1 from "../../src/assets/images/apply-to-hesed-academy-01.jpg";
import apply_2 from "../../src/assets/images/apply-to-hesed-academy-02.jpg";
function BannerCol3() {
  var myIndex = 0;

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides3");
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
    <>
      <div>
        <img src={apply_1} class="mySlides3 w-full" />
        <img src={apply_2} class="mySlides3 w-full" />
      </div>
      <A href="#" class="block uppercase py-12 hover:opacity-60">
        <div class="w-1/2 h-0.5 bg-black mx-auto">&nbsp;</div>
        <h1 class="text-2xl lg:text-2xl font-bold w-3/5 mt-4 mx-auto text-center text-green-100">
          APPLY ONLINE WITH EASE
        </h1>
        <h2 class="text-center text-white text-xl lg:text-xl">
          CLICK HERE TO START
        </h2>
      </A>
    </>
  );
}

export default BannerCol3;
