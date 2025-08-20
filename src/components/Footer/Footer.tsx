import { MapPin } from "lucide-react";
import Button from "../Button/Button";
import {
  contacts,
  policies,
  quickLinks,
  socialLinks,
  stakeholders,
} from "./FooterDatas";
import LogoImage from "../LogoImage/LogoImage";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <LogoImage />
                  </div>
                  <span className="ml-3 text-xl font-bold">SUMS</span>
                </div>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Empowering education, driving innovation, and discovering the
                  future through strategic connections between students,
                  colleges, companies, and cities.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <span className="text-sm font-bold">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-orange-400">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Stakeholders */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-orange-400">
                  For Stakeholders
                </h3>
                <ul className="space-y-3">
                  {stakeholders.map((stake, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                      >
                        {stake}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Support */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-orange-400">
                  Contact & Support
                </h3>
                <ul className="space-y-3">
                  {contacts.map((contact) => (
                    <li
                      key={contact.id}
                      className="flex items-center text-gray-300"
                    >
                      {contact.icon}
                      <span className="text-sm">{contact.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-full overflow-hidden">
          <iframe
            title="SUMS Nepal Live Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789012!2d85.3236789!3d27.7172456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199e1234567%3A0xabcdef1234567890!2sSUMS%20Nepal!5e0!3m2!1sen!2snp!4v1692548765432!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                © 2024 SUMSNEPAL. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
                {policies.map((policy, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {policy}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
