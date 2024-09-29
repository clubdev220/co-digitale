"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ContactModal from "./ContactModal";
import MobileMenu from "./MobileMenu";
import { Button } from "./ui/button";

/**
 * const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

 */

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const path = usePathname();
  const router = useRouter();

  const scrollToValeurs = (id_element: string) => {
    const valeurs = document.getElementById(id_element);
    valeurs?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToServices = (id_element: string) => {
    const valeurs = document.getElementById(id_element);
    valeurs?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Contactez notre stratège numérique sénior pour une consultation gratuite!"
      />

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <header className="bg-bgcolor-1">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image
                  src="/imgs/PNG-02.png"
                  alt="Logo"
                  height={35}
                  width={150}
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Accueil{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      onClick={() => {
                        path != "/"
                          ? router.push("/#valeurs")
                          : scrollToValeurs("valeurs");
                        console.log(path);
                      }}
                    >
                      {" "}
                      Nos valeurs{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      onClick={() => {
                        path != "/"
                          ? router.push("/#services")
                          : scrollToServices("services");
                        console.log(path);
                      }}
                    >
                      {" "}
                      Nos sevices{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/blog"
                    >
                      {" "}
                      Blog{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      onClick={() => {
                        path != "/"
                          ? router.push("/#contact")
                          : scrollToServices("contact");
                        console.log(path);
                      }}
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Button
                    className="rounded-md bg-bgcolor-3 px-5 py-2.5 text-sm font-medium text-white shadow"
                    onClick={() => setIsOpen(true)}
                  >
                    Estimation gratuit
                  </Button>
                </div>

                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={() => setMobileOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuBar;
