import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Brand */}
          <div className="text-center lg:col-span-2 lg:text-left">
            <img
              src={Logo}
              alt="Dev Stack"
              className="mx-auto mb-5 h-9 w-auto lg:mx-0"
            />

            <p className="mx-auto max-w-md text-sm leading-6 text-slate-500 lg:mx-0">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="mt-6 flex justify-center gap-5 text-sm font-medium text-slate-600 lg:justify-start">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <span className="text-slate-300 lg:hidden">•</span>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <span className="text-slate-300 lg:hidden">•</span>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="hidden lg:block">
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
          <div className="hidden lg:block">
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
          <div className="hidden lg:block">
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
        <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-7 text-xs text-slate-400 sm:mt-14 sm:pt-8 sm:text-sm">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4 sm:gap-6">
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
