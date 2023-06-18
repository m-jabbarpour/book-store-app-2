import React from "react";
import LoginManagement from "../../components/custom/LoginManagement";
import AuthLayout from "../../layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <LoginManagement />
    </AuthLayout>
  );
}

export default Login;
