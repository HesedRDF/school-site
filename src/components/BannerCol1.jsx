import { Show, createSignal } from "solid-js";
import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import why_hesed_1 from "../../src/assets/images/why-hesed-academy-01.jpg";
import why_hesed_2 from "../../src/assets/images/why-hesed-academy-02.jpg";
function BannerCol1() {
  var myIndex = 0;

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides1");
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
        <img src={why_hesed_1} class="mySlides1 w-full" />
        <img src={why_hesed_2} class="mySlides1 w-full" />
      </div>
      <A href="#" class="block uppercase py-12 hover:opacity-60">
        <div class="w-1/2 h-0.5 bg-black mx-auto">&nbsp;</div>
        <h1 class="text-2xl lg:text-2xl font-bold w-4/5 mt-4 mx-auto text-center text-green-100">
          HESED ACADEMY DISTINCTIVES
        </h1>
        <h2 class="text-center text-white text-xl lg:text-xl">
          WHY HESED ACADEMY
        </h2>
      </A>
    </>
  );
}

export default BannerCol1;
