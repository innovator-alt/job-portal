import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();

      toast.success("Logged out successfully");

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      toast.error(error.message);
    }
  }

  const active =
    "font-semibold text-blue-600";

  const normal =
    "text-slate-700 transition hover:text-blue-600";

    console.log("Current User:", user);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          JobPortal
        </Link>

        <nav className="flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? active : normal
            }
          >
            Contact
          </NavLink>

          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? active : normal
                }
              >
                Dashboard
              </NavLink>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? active : normal
                }
              >
                Login
              </NavLink>

              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
              >
                Signup
              </Link>
            </>
          )}

        </nav>

      </div>
    </header>
  );
}

export default Navbar;