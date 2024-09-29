"use client";
import Contact from "./Contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ContactModal = ({ isOpen, onClose, title }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col w-full   max-w-[550px] bg-bgcolor-1">
        <DialogHeader>
          <DialogTitle className="text-white py-8 text-4xl lg:text-center">
            {title}
          </DialogTitle>
          <DialogDescription className="text-white text-2xl text-center">
            Remplissez ce formulaire et nous vous contacterons dans les
            prochaines 24 heures !
          </DialogDescription>
        </DialogHeader>
        <Contact />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
