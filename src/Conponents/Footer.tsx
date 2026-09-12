import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <img src={Logo} alt="Dev Stack" className="mb-4 h-8 w-auto" />

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex gap-5 text-sm font-medium text-slate-600">
              <a href="https://github.com/" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a
                href="https://www.linkedin.com/in/md-sohid-mondol-0a6666408/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BULpMKeDBQmSMNtDRIflKuA%3D%3D"
                className="hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* Product */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Product
            </h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-pink-500">
                Home
              </a>

              <a href="#" className="block hover:text-pink-500">
                Technologies
              </a>

              <a href="#" className="block hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>
          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Company
            </h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-pink-500">
                About
              </a>

              <a href="#" className="block hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="block hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>
          {/* Legal */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-slate-800">
              Legal
            </h3>

            <div className="space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-gray-100 pt-8 text-sm text-slate-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
