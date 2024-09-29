import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Contact from "./Contact";

const ContactInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 items-start gap-16  mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div id="contact">
        <h1 className="text-bgcolor-3 text-3xl font-extrabold">Parlons en</h1>
        <p className="text-sm text-white mt-4">
          Have some big idea or brand to develop and need help? Then reach out
          wed love to hear about your project and provide help.
        </p>

        <div className="mt-12">
          <h2 className="text-white text-base font-bold">Email</h2>
          <ul className="mt-4">
            <li className="flex items-center py-6">
              <div className="glassmorphism2  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Mail size={24} color="#fb8500" />
              </div>
              <a
                href="javascript:void(0)"
                className="text-bgcolor-3 text-sm ml-4"
              >
                <small className="block">Adresse mail</small>
                <strong>info@example.com</strong>
              </a>
            </li>

            <li className="flex items-center">
              <div className="glassmorphism2 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Phone size={24} color="#fb8500" />
              </div>
              <a
                href="javascript:void(0)"
                className="text-bgcolor-3 text-sm ml-4"
              >
                <small className="block">Téléphone</small>
                <strong>1 514 779 7490</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-white text-base font-bold">Média Sociaux</h2>

          <ul className="flex mt-4 space-x-4">
            <li className="glassmorphism2 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <Facebook size={24} color="#fb8500" />
              </a>
            </li>
            <li className="glassmorphism2 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <Linkedin size={24} color="#fb8500" />
              </a>
            </li>
            <li className="glassmorphism2 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="javascript:void(0)">
                <Instagram size={24} color="#fb8500" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactInfo;
