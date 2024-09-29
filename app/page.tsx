import ChooseUs from "@/components/ChooseUs";
import ContactInfo from "@/components/ContactInfo";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Valeurs from "@/components/Valeurs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-1 sm:px-24 md:px-12 bg-bgcolor-1">
        <div className="z-10 w-full h-full flex-col items-center max-w-screen-2xl  font-mono lg:flex gap-4">
          <Valeurs />
          <Services />
          <ChooseUs />
          <Cta />
          <ContactInfo />
          <Footer />
        </div>
      </main>
    </>
  );
}
