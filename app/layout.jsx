import './global.css';
import NavBar from '../components/NavBar';
import { orbitron, exo2 } from './fonts';

export const metadata = {
  title: {
    default: 'Andrius Website',
    template: '%s | Andrius Website',
  },
  description: 'Indie Gamer description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${exo2.variable} ${orbitron.variable}`}>
      <body className='flex flex-col px-4 py-2 min-h-screen bg-orange-50  border-solid border border-blue-700'>
        <header className='border-solid border border-green-700'>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='text-center py-3 text-xs border-t text-slate-500'>
          game data and images courtesy of{' '}
          <a
            href='https://rawg.io'
            target='_blank'
            className='text-orange-800 hover:underline'
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
