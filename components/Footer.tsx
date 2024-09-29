import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <strong className="block text-center text-2xl font-bold text-white sm:text-3xl">
            Voulez-vous recevoir des conseilles et astuces ?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg mx-auto">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-md border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="monmail@domain.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-bgcolor-3 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                {`S'inscrire`}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4  text-white lg:text-left lg:text-lg">
              {`Chez CO Digitale, notre expertise repose sur une maîtrise approfondie du marketing numérique et des outils technologiques. Que ce soit à travers le développement de sites web performants, l’optimisation SEO avancée, la gestion stratégique des réseaux sociaux, ou la création de contenu multimédia engageant, nous mettons à profit notre savoir-faire pour booster la visibilité et les performances de votre marque.`}
            </p>

            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.facebook.com/profile.php?id=61565875422184"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>

                <Facebook className="w-5 h-5 text-bgcolor-3" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.instagram.com/codigitale1/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>

                <Instagram className="w-5 h-5 text-bgcolor-3" />
              </a>

              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://www.linkedin.com/in/abdoul-hamidou-compaore-587246310/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> LinkedIn </span>

                <Linkedin className="w-5 h-5 text-bgcolor-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-lg text-bgcolor-3">
                {" "}
                Services{" "}
              </strong>

              <ul className="mt-6 space-y-1 ">
                <li className="text-white">
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Gestion des réseaux sociaux{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    Design Graphique
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    Création de contenue vidéos
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    Publicité digitale
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    {`Automatisation avec l'IA`}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    Création de site web
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    {`Création d'application Mobile`}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-lg text-bgcolor-3">
                {" "}
                A propos{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Qui somme-vous{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Nos Valeurs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Nos Expertises{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Portfolio{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-lg text-bgcolor-3">
                {" "}
                Support{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Condition générale{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-yellow-100"
                    href="#"
                  >
                    {" "}
                    Confidentialité{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Company 2024. Tout droit reservé.
            <br />
            Propulsé par
            <a
              href="#"
              className="text-bgcolor-3 underline transition hover:text-gray-700/75"
            >
              co-digitale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
