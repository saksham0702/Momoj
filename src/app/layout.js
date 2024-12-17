   

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

import StoreProvider from "./StoreProvider";





export const metadata = {
  title: "restraunt",
  description: " an app for ordering momos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
        <header>
          <Navbar/>
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      
        </StoreProvider>
        
        </body>

       
    </html>
  );
}
