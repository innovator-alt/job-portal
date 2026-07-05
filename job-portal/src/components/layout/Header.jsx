import { Link } from "react-router-dom";
import Container from "../common/Container";

function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            Job Portal
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/login">Login</Link>

            <Link to="/signup">Signup</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;