import { Users } from "lucide-react";

const HelpYou = () => {
  return (
    <section className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="max-w-screen-2xl">
        <h2 className="text-5xl text-start font-bold text-bgcolor-3">
          Laissez-nous
          <br /> vous aider
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="grid  grid-cols-2 gap-4">
            <a
              className="glassmorphism block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Users size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Engagement Client
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Satisfaction client comme priorité
              </p>
            </a>
            <a
              className="glassmorphism block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Users size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Engagement Client
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Satisfaction client comme priorité
              </p>
            </a>
            <a
              className="glassmorphism block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Users size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Engagement Client
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Satisfaction client comme priorité
              </p>
            </a>
            <a
              className="glassmorphism block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Users size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Engagement Client
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Satisfaction client comme priorité
              </p>
            </a>
          </div>

          <div className="h-[250p]">
            <a
              className="glassmorphism block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Users size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">site internet</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Satisfaction client comme priorité
              </p>
            </a>
          </div>
          <div>
            <a
              className="glassmorphism block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Users size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">branding</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Satisfaction client comme priorité
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpYou;
