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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />}
    </html>
  )
};
