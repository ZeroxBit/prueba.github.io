import Image from "@/components/atoms/Image/Image";
import "./footerStyle.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__section">
        <div>
          <Image
            src="/images/logo-mobile.svg"
            alt="Logo white"
            width="86"
            height="43"
            className="footer__logo"
            responsive={[
              {
                minWidth: "768px",

                src: "/images/logo-white.svg",
              },
            ]}
          />
        </div>
        <p className="footer__text">© 2023 RIMAC Seguros y Reaseguros.</p>
      </section>
    </footer>
  );
};

export default Footer;
