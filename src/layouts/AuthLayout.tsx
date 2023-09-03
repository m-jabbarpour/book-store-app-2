import HeaderSm from "../components/common/HeaderSm";
import HeaderMd from "../components/common/HeaderMd";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderSm />
      <HeaderMd />
      <div className="dark:bg-slate-800 h-[100vh] min-h-fit">
        <div className="container mx-auto px-5 md:px-12 pt-10">{children}</div>
      </div>
    </>
  );
};

export default AuthLayout;
