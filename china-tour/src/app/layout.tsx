import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'China-Tour',
  description: 'Powered by Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          <Header className="fixed top-0 left-0 right-0 z-50" />
          <main className="flex-1 overflow-auto mt-[72px] mb-[104px]">{children}</main>
          <Footer className="fixed bottom-0 left-0 right-0 z-50" />
        </div>
      </body>
    </html>
  );
}
