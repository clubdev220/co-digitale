import { Button } from "./ui/button";

const Cta = () => {
  return (
    //mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 from chose us
    // overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <section className="overflow-hidden  bg-bgcolor-1 gap-4 sm:grid sm:grid-cols-2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover rounded-md sm:h-full"
        />

        <div className="glassmorphism2 rounded-md p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-bgcolor-3 md:text-3xl">
              Nos expertises
            </h2>

            <p className="hidden text-white md:mt-4 md:block">
              Chez CO Digitale, notre expertise repose sur une maîtrise
              approfondie du marketing numérique et des outils technologiques.
              Que ce soit à travers le développement de sites web performants,
              l’optimisation SEO avancée, la gestion stratégique des réseaux
              sociaux, ou la création de contenu multimédia engageant, nous
              mettons à profit notre savoir-faire pour booster la visibilité et
              les performances de votre marque. Notre approche data-driven et
              créative nous permet de concevoir des solutions sur mesure,
              adaptées à vos objectifs. Prêt à transformer votre stratégie
              digitale ? Contactez-nous dès aujourd’hui pour découvrir comment
              nous pouvons faire grandir votre entreprise en ligne !
            </p>

            <div className="mt-4 md:mt-8">
              <Button className="flex items-center rounded border border-white bg-bgcolor-3 px-12 py-5 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
