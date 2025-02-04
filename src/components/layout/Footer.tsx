export default function Footer() {
    return (
      <footer className="bg-white dark:bg-dark-bg border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/duy-huynh-88798b214/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                GitHub
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Duy Huynh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}