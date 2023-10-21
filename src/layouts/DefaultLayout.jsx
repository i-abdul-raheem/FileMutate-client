import { Footer, Header, Toast } from "../components";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toast />
    </>
  );
};
