import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import logo from "../../src/assets/images/Hesed-Academy-Logo.jpg";
function MenuItems() {
  return (
    <ul class="menu text-lg lg:text-sm flex space-y-6 lg:space-y-0 pt-6 lg:pt-0 flex-col lg:flex-row">
      <li>
        <A href="/" class="lg:py-14 px-4 lg:px-8 hover:bg-blue-100 lg:border-x">
          Home
        </A>
      </li>
      <li>
        <A
          href="/about-hesed-academy"
          class="lg:py-14 px-4 lg:px-8 hover:bg-blue-100 lg:border-r"
        >
          About us
        </A>
      </li>
      <li>
        <A
          href="/our-services"
          class="lg:py-14 px-4 lg:px-8 hover:bg-blue-100 lg:border-r"
        >
          Our Services
        </A>
      </li>
      <li>
        <A
          href="/gallery"
          class="lg:py-14 px-4 lg:px-8 hover:bg-blue-100 lg:border-r"
        >
          Gallery
        </A>
      </li>
    </ul>
  );
}

export default MenuItems;
