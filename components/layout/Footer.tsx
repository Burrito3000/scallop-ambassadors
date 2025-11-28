import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Scallop</h3>
            <p className="text-gray-600">Borderless finance for the curious</p>
          </div>

          {/* Links */}
          <div className="flex space-x-8">
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

