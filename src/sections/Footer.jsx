import { useEffect, useState } from "react";
import footerLogo from "../assets/images/headerlogo.svg";
import {
  footerLinks_desktop,
  footerLinks_mobile,
  socialMedia,
} from "../constants";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(
    window.innerWidth < 768 ? footerLinks_mobile : footerLinks_desktop
  );

  useEffect(() => {
    const handleResize = () => {
      setFooterLinks(
        window.innerWidth < 768 ? footerLinks_mobile : footerLinks_desktop
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="max-container ">
      <a id="redes-sociais" className="anchor" />
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img
            src={footerLogo}
            alt="logo"
            width={150}
            height={46}
            className="m-0"
          />
          <p className="mt-6 text-base leading-7 font-montserrat text-background sm:max-w-sm">
            Agrupamento de Escolas de Condeixa-a-Nova
            <br />
            Escola Secundária Fernando Namora
            <br />
            Lista 𝕏 candidata ao Parlamento dos Jovens
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="cursor-pointer flex justify-center items-center w-12 h-12 bg-background rounded-full"
                key={icon.alt}
                onClick={() =>
                  window.open(icon.href, "_blank", "noreferrer noopener")
                }
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-background">
                {section.title || ""}&nbsp;
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className={`${
                      link.href ? "cursor-pointer" : ""
                    } mt-3 font-montserrat text-base leading-normal text-background`}
                    key={link.name}
                    onClick={() =>
                      link.href
                        ? window.open(
                            link.href,
                            "_blank",
                            "noreferrer noopener"
                          )
                        : null
                    }
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-background mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <p>© LISTA 𝕏 2023. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
