import Container from "../styles/container.styles";
import Typography from "../styles/typography.styles";

const footerLinks = [
  {
    header: "Help",
    links: ["Support", "Knowledgebase", "Tutorials"],
  },
  {
    header: "Features",
    links: ["Screen Sharing", "IOS & Android Apps", "File Sharing"],
  },
  {
    header: "Company",
    links: ["About Us", "Careers", "Contact Us"],
  },
  {
    header: "Contact Us",
    links: ["info@chatapp.com", "1-800-200-300"],
  },
];

const Footer = () => (
  <footer className="py-24 px-4">
    <Container className="flex justify-between md:flex-col md:space-y-16 relative">
      <div className="mr-auto flex flex-col items-start w-48 md:mb-16">
        <img src="/chatapp-logo-blue.svg" className="h-8" />
        <Typography variant="footer-link" className="mb-auto mt-5">
          The last team chat you will ever need
        </Typography>
      </div>
      <div className="w-1/5 md:hidden" />
      <div className="flex flex-wrap lg:justify-center md:justify-between xs:flex-col">
        {footerLinks.map(({ header, links }) => (
          <div className="ml-4 h-72 px-4 md:ml-0" key={header}>
            <Typography variant="header">{header}</Typography>
            <div className="space-y-5 mt-8">
              {links.map((link) => (
                <Typography
                  key={link}
                  variant="footer-link"
                  className="duration-300 hover:text-secondary cursor-pointer"
                >
                  {link}
                </Typography>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Typography variant="footer-link" className="absolute bottom-0 left-0">
        &copy; Copyright Chat App
      </Typography>
    </Container>
  </footer>
);

export default Footer;
