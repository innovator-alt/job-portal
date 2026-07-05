import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import Input from "../components/common/Input";
import PasswordInput from "../components/auth/PasswordInput";
import GoogleButton from "../components/auth/GoogleButton";
import AuthCard from "../components/auth/AuthCard";
import useAuth from "../hooks/useAuth";

function Signup() {
  const { signup, googleLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password);
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await googleLogin();
      toast.success("Google Login Successful");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <MainLayout>
      <div className="flex min-h-[85vh] items-center justify-center bg-slate-50 px-4">
        <AuthCard
          title="Create Account"
          subtitle="Start your career journey today."
        >
          <GoogleButton onClick={handleGoogle} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              placeholder="Enter your email"
              register={register}
              name="email"
              error={errors.email}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              register={register}
              name="password"
              error={errors.password}
            />

            <button
              type="submit"
              className="mt-3 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-blue-600"
            >
              Login
            </Link>
          </p>
        </AuthCard>
      </div>
    </MainLayout>
  );
}

export default Signup;