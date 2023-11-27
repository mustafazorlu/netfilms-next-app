import "../style/reset.css";
import "../style/global.css";
import { Inter } from "@next/font/google";

import Header from '../components/header'
import Footer from '../components/footer'

const interFontFamily = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="tr" className={interFontFamily.className}>
            <body className="container">
                <Header/>
                {children}
                <Footer/>
                </body>
        </html>
    );
}
