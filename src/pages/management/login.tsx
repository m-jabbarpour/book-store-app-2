import LoginManagement from "@/components/custom/LoginManagement";
import AuthLayout from "@/layouts/AuthLayout";

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginManagement />
    </AuthLayout>
  );
};

export default Login;
