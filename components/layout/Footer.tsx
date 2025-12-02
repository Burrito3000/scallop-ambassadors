import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="mb-3">
              <Image
                src="/images/scallop.png"
                alt="Scallop"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </div>
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

