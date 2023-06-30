import HeaderSm from "../components/common/HeaderSm";
import HeaderMd from "../components/common/HeaderMd";
import Footer from "../components/common/Footer";

const CommonLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderSm />
      <HeaderMd />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
