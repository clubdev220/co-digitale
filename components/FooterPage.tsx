const FooterPage = () => {
  return (
    <>
      <div className="mt-8 border-t border-gray-100 pt-8 p-8">
        <div className="sm:flex sm:justify-between">
          <p className="text-xs text-gray-500">
            {" "}
            &copy; 2024 CO Digitale tout droit reservé
          </p>

          <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Condition générale
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                confidentialité
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Faq
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-500 transition hover:opacity-75">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
