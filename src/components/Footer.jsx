import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import logo from "../../src/assets/images/Hesed-Academy-Logo.jpg";
function Footer() {
  return (
    <footer class="bg-blue-950 text-white py-20">
      <div class="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b pb-10">
        <div class="space-y-4">
          <h2 class="text-blue-200 text-xl font-bold">About Us</h2>
          <div>
            <A href="/about-hesed-academy" class="text-sm lg:text-lg underline">
              Vision, Mission, Mandate, Distinctives & Core Values
            </A>
          </div>
          <div>
            <A href="/gallery" class="text-sm lg:text-lg underline">
              Campus Gallery
            </A>
          </div>
        </div>
        <div class="space-y-4">
          <h2 class="text-blue-200 text-xl font-bold">Our Services</h2>
          <div>
            <A href="/our-services" class="text-sm lg:text-lg underline">
              Early Grade Learning, Primary Education, Secondary Education
            </A>
          </div>
        </div>
        <div class="space-y-4">
          <h2 class="text-blue-200 text-xl font-bold">Contact</h2>
          <div class="text-sm lg:text-lg space-y-4">
            <p>Hesed Center, (Behind ECWA Staff School), Off Zaria Road, Jos</p>
            <p>
              <span class="text-yellow-200">Postal Address:</span>
              <br />
              P. O. Box 5635, Jos, PL 930006, Nigeria
            </p>
            <p>
              <span class="text-yellow-200">Phone Numbers:</span>
              <br />
              +234-813-778-2087
              <br />
              +234-806-161-6654
              <br />
              +234-816-917-7153
            </p>
            <p>
              <span class="text-yellow-200">Email Address:</span>
              <br />
              hesed.academy.office@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div class="text-sm text-center mt-4 text-gray-300">
        © 2024. All rights reserved. Hesed Academy. www.hesedacademy.net
      </div>
    </footer>
  );
}

export default Footer;
