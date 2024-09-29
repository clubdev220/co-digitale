import { Button } from "./ui/button";

const ChooseUs = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glassmorphism2 rounded-md p-8 md:p-12 lg:px-16 lg:py-24 items-center ">
            <div className="mx-auto max-w-xl text-start">
              <h2 className="text-2xl font-bold text-bgcolor-3 md:text-3xl">
                Pourquoi nous choisir ?
              </h2>

              <p className=" text-white sm:mt-4 sm:block">
                Le monde du marketing numérique évolue constamment, et votre
                entreprise mérite un partenaire qui saura non seulement vous
                accompagner, mais aussi vous faire briller. Chez CO Digitale,
                nous mettons à votre disposition une approche data-driven,
                combinée à notre expertise en marketing digital, pour garantir
                des résultats mesurables et impactants. Nous ne sommes pas
                simplement un prestataire, nous devenons une extension de votre
                équipe. Ensemble, nous créerons des stratégies sur mesure qui
                feront croître votre marque et toucheront votre audience là où
                elle se trouve.
              </p>

              <div className="mt-4 md:mt-8">
                <Button className="flex items-center rounded border border-white bg-bgcolor-3 px-12 py-5 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                  Reservé un appel
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt=""
              src={`https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80`}
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              alt=""
              src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
