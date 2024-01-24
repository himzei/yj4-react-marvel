import ScrollTop from "../lib/ScrollTop";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <ScrollTop />
      <Header />
      {children}
      <Footer />
    </>
  );
}
