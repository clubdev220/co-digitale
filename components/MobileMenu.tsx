import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";

interface mobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: mobileMenuProps) => {
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
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="bg-bgcolor-1 border-none text-white">
        <SheetHeader>
          <SheetDescription>
            <div>
              <ul className="flex flex-col items-center gap-6 text-md">
                <li className="cursor-pointer">
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    href="/"
                  >
                    {" "}
                    Accueil{" "}
                  </a>
                </li>

                <li className="cursor-pointer">
                  <a
                    className="text-white transition hover:text-gray-500/75"
                    onClick={() => {
                      if (path != "/") {
                        router.push("/#valeurs");
                      } else {
                        scrollToValeurs("valeurs");
                        isOpen = false;
                      }
                      /* path != "/"
                        ? router.push("/#valeurs")
                        : scrollToValeurs("valeurs");
                      console.log(path); */
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
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
