function GoogleButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-5 flex w-full items-center justify-center rounded-lg border border-slate-300 py-3 font-semibold transition hover:bg-slate-100"
    >
      Continue with Google
    </button>
  );
}

export default GoogleButton;