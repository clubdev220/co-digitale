import {
  ChartCandlestick,
  Clapperboard,
  EarthLock,
  Megaphone,
  MessageCircleMore,
  ScanSearch,
} from "lucide-react";

const Services = () => {
  return (
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className=" max-w-lg text-start py-12">
          <h2
            id="services"
            className="text-3xl font-bold sm:text-4xl text-bgcolor-3"
          >
            Nos Services
          </h2>

          <p className="mt-4 text-gray-300">
            Nous offrons une gamme complète de services de marketing numérique
            conçus pour répondre à tous vos besoins en ligne. De la création de
            sites web sur mesure à la gestion stratégique des réseaux sociaux,
            nous vous aidons à maximiser votre présence digitale.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            href="#"
          >
            <EarthLock className=" h-12 w-12 text-gray-300" />

            <h2 className="mt-4 py-6 text-xl font-bold text-white">
              Conception de Sites Web
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Création de sites Web sur mesure pour répondre à vos besoins
              spécifiques. Développement de sites e-commerce. Audit et
              amélioration de sites Web existants (architecture, conception,
              réactivité).
            </p>
          </a>

          <a
            className="block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            href="#"
          >
            <MessageCircleMore className=" h-12 w-12 text-gray-300" />

            <h2 className="mt-4 py-6 text-xl font-bold text-white">
              Community Management
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Nous offrons une gestion complète des réseaux sociaux pour
              renforcer votre présence en ligne, incluant la création de
              campagnes stratégiques adaptées à votre audience.
            </p>
          </a>

          <a
            className="block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            href="#"
          >
            <ScanSearch className=" h-12 w-12 text-gray-300" />

            <h2 className="mt-4 py-6 text-xl font-bold text-white">
              Optimisation SEO
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Recherche de mots-clés. Optimisation technique (SEO technique).
              Audits SEO complets. Conseils et recommandations en SEO.
            </p>
          </a>

          <a
            className="block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            href="#"
          >
            <Megaphone className=" h-12 w-12 text-gray-300" />

            <h2 className="mt-4 py-6 text-xl font-bold text-white">
              Publicité Digitale
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Création et gestion de campagnes publicitaires en ligne. Publicité
              sur Google Ads, Facebook, Instagram et autres plateformes.
            </p>
          </a>

          <a
            className="block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            href="#"
          >
            <Clapperboard className=" h-12 w-12 text-gray-300" />

            <h2 className="mt-4 py-6 text-xl font-bold text-white">
              Contenu Numérique et Vidéo
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Élaboration de stratégies de contenu numérique. Production de
              contenus engageants (articles, visuels, vidéos). Conception
              graphique pour renforcer votre identité de marque. Publication et
              promotion de contenu.
            </p>
          </a>

          <a
            className="block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            href="#"
          >
            <ChartCandlestick className=" h-12 w-12 text-gray-300" />

            <h2 className="mt-4 py-6 text-xl font-bold text-white">
              Automation Marketing
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Mise en place de systèmes d’automatisation pour optimiser les
              processus marketing. Gestion de campagnes d’emailing automatisées.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded border border-bgcolor-white hover:border-bgcolor-3 bg-bgcolor-3 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Réserver un appel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

/**block w-full rounded border border-bgcolor-3 px-12 py-3 text-sm font-medium text-white transition-all hover:text-bgcolor-1 hover:bg-bgcolor-3 focus:outline-none focus:ring active:bg-transparent sm:w-auto */
