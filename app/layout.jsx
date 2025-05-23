import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
const monters = Montserrat({ subsets: ["latin"] });
import style from "./page.module.css";
export const metadata = {
  title: "Ihab Yousef",
  description: "ehab yousef portfolio",
};

export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body className={monters.className}>
        <div className={style.container}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
