import { GoogleTagManager } from '@next/third-parties/google';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

// Inter (variable) is bundled locally so builds never depend on Google Fonts being reachable.
const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  weight: '100 900',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
});

const title = 'Muhammad Ahsan Siddiqui | Full-Stack Software Engineer';
const description = 'Portfolio of Muhammad Ahsan Siddiqui, a Full-Stack Software Engineer building fintech, mobile and web products with Flutter, Node.js, Java, React/Next.js, PostgreSQL and PHP. Currently building WealthNX AI at INEXOR.';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title,
  description,
  keywords: ['Ahsan Siddiqui', 'Full-Stack Developer', 'Flutter', 'Node.js', 'Java', 'Spring Boot', 'React', 'Next.js', 'PostgreSQL', 'WealthNX', 'Portfolio'],
  authors: [{ name: 'Muhammad Ahsan Siddiqui', url: 'https://github.com/ahsansiddiqui-113' }],
  openGraph: { title, description, type: 'website', siteName: 'Muhammad Ahsan Siddiqui' },
  twitter: { card: 'summary', title, description },
};

export const viewport = { themeColor: '#06070d' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-fx" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        <ToastContainer theme="dark" />
        <Navbar />
        <main className="relative mx-auto max-w-[78rem] px-5 text-white sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />}
    </html>
  )
};
