import {Poppins} from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Qadron Tech - Biraj Karki',
  description: 'From Scratch to full development , we are here for you!',
  keyword: 'web development , it company , qadron tech , nextjs , nestjs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Header />
        <main className='container'> {children} </main>
        </body>
    </html>
  );
}
