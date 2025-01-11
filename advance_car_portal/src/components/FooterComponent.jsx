import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer container className="bg-gray-800 text-white py-4">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/path/to/logo.svg" // Replace with your logo path
              alt="Car Rental Logo"
              name="Car Rental"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:mt-2 sm:grid-cols-4 sm:gap-4">
            <div>
              <Footer.Title title="About Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">Company</Footer.Link>
                <Footer.Link href="/team">Team</Footer.Link>
                <Footer.Link href="/careers">Careers</Footer.Link>
                <Footer.Link href="/blog">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" />
              <Footer.LinkGroup col>
                <Footer.Link href="/services">Car Rentals</Footer.Link>
                <Footer.Link href="/services">Airport Transfers</Footer.Link>
                <Footer.Link href="/services">Corporate Rentals</Footer.Link>
                <Footer.Link href="/services">Long-term Rentals</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/terms-conditions">Terms & Conditions</Footer.Link>
                <Footer.Link href="/cookie-policy">Cookie Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact" />
              <Footer.LinkGroup col>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
                <Footer.Link href="/support">Support</Footer.Link>
                <Footer.Link href="/faq">FAQs</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 border-t border-gray-700 pt-4 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            by="Car Rental™"
            year={new Date().getFullYear()}
          />
          <div className="mt-2 flex space-x-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://github.com" icon={BsGithub} />
            <Footer.Icon href="https://facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;