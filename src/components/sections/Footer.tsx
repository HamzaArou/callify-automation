import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">VoiceAI</h3>
            <p className="text-gray-600">
              Automating business communications with AI-powered voice technology
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} VoiceAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;