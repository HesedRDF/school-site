import { Show, createSignal } from "solid-js";
import { A } from "@solidjs/router";
import logo from "../../src/assets/images/Hesed-Academy-Logo.jpg";
import MenuItems from "./MenuItems";
function Header() {
  const [showMenu, setShowMenu] = createSignal(false);
  return (
    <>
      <Show when={showMenu()}>
        <div class="bg-slate-950 bg-opacity-90 fixed z-50 h-screen w-screen flex">
          <div class="grow">&nbsp;</div>
          <div class="w-80 bg-white">
            <div class="flex justify-between border-b pb-4">
              <div>&nbsp;</div>
              <svg
                onClick={() => {
                  setShowMenu(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 mt-4 mr-4 text-blue-950 hover:opacity-60 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <MenuItems />
          </div>
        </div>
      </Show>
      <header class="border-b h-48 overflow-hidden">
        <div class="bg-blue-950 text-white text-sm py-3">
          <div class="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row justify-between alata">
            <div class="flex space-x-1 py-2 lg:pt-2 w-fit mx-auto lg:mx-0 lg:text-left">
              <span class="font-bold">Pro Deo et Patria </span>
              <A href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline font-bold text-yellow-400 hover:opacity-60"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </A>
            </div>
            <div class="pt-3 border-t lg:border-none lg:pt-0 flex space-x-4 justify-center">
              <A href="#" class="bg-red-700 p-2 rounded-lg hover:opacity-60">
                Online Application Form
              </A>
              <a
                href="https://wa.me/+2348137782087"
                target="_blank"
                class="bg-green-600 p-2 rounded-lg hover:opacity-60"
              >
                +234 813 778 2087
              </a>
            </div>
          </div>
        </div>
        <div class="w-11/12 lg:w-10/12 mx-auto flex justify-between">
          <div class="py-3">
            <A href="" class="w-fit flex space-x-2">
              <img src={logo} class="w-14 lg:w-24" />
              <div class=" text-blue-950 merriweather text-xl lg:text-4xl uppercase pt-1 lg:pt-3">
                <div>Hesed</div>
                <div class="-mt-1">Academy</div>
              </div>
            </A>
          </div>
          <div class="lg:hidden">
            <svg
              onClick={() => {
                setShowMenu(true);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 mt-4 -mr-2 text-blue-950 hover:opacity-60 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div class="hidden lg:block pt-14">
            <MenuItems />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
