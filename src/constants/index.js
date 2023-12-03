import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

export const navLinks = [
  {
    index: 0,
    label: "A Lista 𝕏",
    submenu: true,
    sublinks: [
      {
        label: "Quem somos?",
        href: "#a-nossa-lista",
      },
      {
        label: "Porquê votar na Lista 𝕏?",
        href: "#porque-votar-na-lista-x",
      },
      {
        label: "As nossas medidas",
        href: "/medidas",
        blank: true,
      },
    ],
  },
  {
    index: 1,
    label: "Parlamento dos Jovens",
    submenu: true,
    sublinks: [
      {
        label: "O que é o PdJ?",
        href: "#o-que-e-pdj",
      },
      {
        label: "Tema deste ano",
        href: "#tema",
      },
      {
        label: "Porquê votar?",
        href: "#porque-votar",
      },
    ],
  },
  {
    index: 2,
    label: "Contactos",
    submenu: true,
    sublinks: [
      {
        label: "Redes sociais",
        href: "#redes-sociais",
      },
    ],
  },
];

export const footerLinks = [
  {
    title: "Constituintes da Lista",
    links: [
      { name: "1. Miguel Pires" },
      { name: "2. Nelson Brízida" },
      { name: "3. Karolina Órfão" },
      { name: "4. Afonso Salgueiro" },
      { name: "5. Gonçalo Calvinho" },
    ],
  },
  {
    links: [
      { name: "6. Isa Alves" },
      { name: "7. Nuno Dinis" },
      { name: "8. Laura Ferrari" },
      { name: "9. Ariston Girão" },
      { name: "10. Dinis Andrade" },
    ],
  },
  {
    title: "Quaisquer dúvidas",
    links: [{ name: "lista.x@sapo.pt", href: "mailto:lista.x@sapo.pt" }],
  },
];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    href: "https://www.facebook.com/profile.php?id=61554334552345",
  },
  {
    src: twitter,
    alt: "twitter logo",
    href: "https://twitter.com/lista_x_pdj",
  },
  {
    src: instagram,
    alt: "instagram logo",
    href: "https://www.instagram.com/lista.x.pdj/",
  },
];
