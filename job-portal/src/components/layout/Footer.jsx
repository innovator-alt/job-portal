import Container from "../common/Container";

function Footer() {
  return (
    <footer className="border-t bg-white py-6">
      <Container>
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;