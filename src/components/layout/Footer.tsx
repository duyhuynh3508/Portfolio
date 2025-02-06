import { Github, Linkedin, Mail} from 'lucide-react';
const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} ABC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;