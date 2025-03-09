import Link from 'next/link';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({className}: HeaderProps) => {
  return (
    <header className={cn('w-full bg-white shadow-md', className)}>
      {/* Logo */}
      <div className="flex items-center px-6 py-3">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
            China-Tour
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <div className="relative max-w-2xl mx-auto">
            <Input type="text" placeholder="Search" className="w-full pl-10" />
            <div className="absolute left-3 top-2.5 h-5 w-5 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/discover" className="text-gray-700 hover:text-gray-900">
            Discover
          </Link>
          <Link href="/trips" className="text-gray-700 hover:text-gray-900">
            Trips
          </Link>
          <Link href="/review" className="text-gray-700 hover:text-gray-900">
            Review
          </Link>

          {/* Language/Currency Selector */}
          <Button variant="ghost" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>USD</span>
          </Button>

          {/* Sign In Button */}
          <Button variant="default">Sign in</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
