import Link from "next/link";
import LoginForm from "../components/custom/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <LoginForm />
      <div className="mx-auto text-center mt-3">
        <span>عضو نیستید؟ </span>
        <Link href="signup">
          <span className="cursor-pointer hover:text-primary">ثبت‌نام</span>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Login;
