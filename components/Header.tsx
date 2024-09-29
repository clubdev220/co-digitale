"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Header = () => {
  const path = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

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
      <section className="bg-bgcolor-1 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[650px] lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-bgcolor-3 via-bgcolor-3 to-bgcolor-2 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
              Des solutions numériques
              <span className="sm:block"> haut de gamme </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Nous comprenons que chaque entreprise a des besoins uniques en
              matière de marketing numérique.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className=" cursor-pointer block w-full rounded border border-white-600 bg-bgcolor-3 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                onClick={() => setIsOpen(true)}
              >
                Consultation gratuit
              </a>

              <a
                className="block w-full rounded border border-bgcolor-3 px-12 py-3 text-sm font-medium text-white transition-all hover:text-bgcolor-1 hover:bg-bgcolor-3 focus:outline-none focus:ring active:bg-transparent sm:w-auto"
                onClick={() => {
                  path != "/"
                    ? router.push("/#contact")
                    : scrollToServices("contact");
                  console.log(path);
                }}
              >
                Nous Contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
