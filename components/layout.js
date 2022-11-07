import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className='bg-primary'>
      <Header />
      <div className='min-h-screen'>{children}</div>
      <Footer />
    </div>
  );
}
