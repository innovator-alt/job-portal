import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import Input from "../components/common/Input";
import PasswordInput from "../components/auth/PasswordInput";
import AuthCard from "../components/auth/AuthCard";
import GoogleButton from "../components/auth/GoogleButton";
import useAuth from "../hooks/useAuth";

function Login() {
  const navigate = useNavigate();

  const { login, googleLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);

      toast.success("Welcome Back");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <MainLayout>
      <div className="flex min-h-[85vh] items-center justify-center bg-slate-50 px-4">
        <AuthCard
          title="Welcome Back"
          subtitle="Login to your account"
        >
          <GoogleButton onClick={handleGoogle} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              name="email"
              register={register}
              error={errors.email}
            />

            <PasswordInput
              label="Password"
              name="password"
              register={register}
              error={errors.password}
            />

            <button
              className="mt-2 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <div className="mt-5 flex justify-between text-sm">
            <Link
              to="/forgot-password"
              className="text-blue-600"
            >
              Forgot Password?
            </Link>

            <Link
              to="/signup"
              className="text-blue-600"
            >
              Create Account
            </Link>
          </div>
        </AuthCard>
      </div>
    </MainLayout>
  );
}

export default Login;