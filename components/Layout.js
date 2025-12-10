
import Navbar from "./Navbar"; // your existing Navbar
import Footer from "./Footer"; // create Footer if it doesn't exist

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Reuse your existing Navbar */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
