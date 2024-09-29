"use client";
import {
  Brain,
  Brush,
  ChartNoAxesCombined,
  Handshake,
  ScrollText,
  Users,
} from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { Button } from "./ui/button";

const Valeurs = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="py-12">
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Réserver un appel"
      />

      <div
        id="valeurs"
        className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className=" max-w-xl text-start lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl text-bgcolor-3">
              Nos Valeurs
            </h2>

            <p className="mt-4 mb-4 text-white">
              Nos actions sont guidées par des valeurs fondamentales qui
              définissent notre approche du marketing numérique. Nous plaçons la
              satisfaction de nos clients au cœur de notre mission, en créant
              des solutions sur mesure qui garantissent des résultats concrets.
              Avec une combinaison d’expertise et d’innovation, nous utilisons
              des stratégies basées sur les données pour maximiser votre impact.
            </p>

            <Button
              className="flex items-center rounded border border-white bg-bgcolor-3 px-12 py-5 text-sm font-medium text-white transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
              onClick={() => setIsOpen(true)}
            >
              Réserver un appel
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="glassmorphism block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
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
              className="glassmorphism2 block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-3 p-3">
                <Brain size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Expertise et Innovation
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Expertise en marketing numérique
              </p>
            </a>

            <a
              className="glassmorphism block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <ChartNoAxesCombined size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Efficacité et Résultats
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Orientation vers les résultats.
              </p>
            </a>

            <a
              className="glassmorphism2 block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-3 p-3">
                <ScrollText size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Transparence et Flexibilité
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Propositions sur mesure, Flexibilité et adaptation.
              </p>
            </a>

            <a
              className="glassmorphism block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-1 p-3">
                <Brush size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">Créativité</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Création de contenu engageant.
              </p>
            </a>

            <a
              className="glassmorphism2 block rounded-xl border border-bgcolor-3 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-bgcolor-3 p-3">
                <Handshake size={24} color="white" />
              </span>

              <h2 className="mt-2 font-bold text-bgcolor-2">
                Partenariat à long terme
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-white">
                Collaboration et proximité.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valeurs;
