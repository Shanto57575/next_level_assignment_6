import { Link } from "react-router";
import logo from "../assets/icons/swiftDrops.png";

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "Send a Parcel", href: "#" },
      { name: "Track Shipment", href: "#" },
      { name: "Delivery Rates", href: "#" },
      { name: "International Shipping", href: "#" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Shipping Guide", href: "#" },
      { name: "Report an Issue", href: "#" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <footer className="w-full bg-white dark:bg-black border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-10">
          {/* Logo & CTA */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link to="/" className="flex justify-center lg:justify-start">
              <img src={logo} className="w-28 h-28" alt="SwiftDrop Logo" />
            </Link>
            <p className="font-sans pb-6 text-sm text-gray-500 dark:text-gray-300 lg:max-w-xs text-center lg:text-left">
              SwiftDrop is your trusted parcel delivery partner in more than 100
              countries, delivering millions of packages securely & on time.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:mx-auto text-left">
              <h4 className="font-serif text-lg text-gray-900 dark:text-white font-medium mb-7 capitalize">
                {title}
              </h4>
              <ul className="text-sm transition-all duration-500">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className={index === links.length - 1 ? "" : "mb-4"}
                  >
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-x-1 font-sans text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center">
            ©{" "}
            <Link
              to="/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
            >
              SwiftDrop
            </Link>{" "}
            <p className="font-bold">{new Date().getFullYear()}</p> · All Rights
            Reserved by{" "}
            <p className="font-serif text-accent-foreground">Sh@nto</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
