export default function Hero() {
  return (
    <section
      className="min-h-screen bg-accent bg-center text-white flex items-center justify-center relative"
      style={{ backgroundImage: "url('./src/assets/Local-Moving-Company.jpg')" }}
    >
      <div className="absolute inset-0 bg-accent bg-opacity-60" />
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-5xl text-black font-bold mb-6 leading-tight">
          New York City’s
          <br />
          Trusted Moving Company
        </h1>
        <p className="text-lg mb-6 text-black">
          Affordable, professional, and stress-free — experience a move that’s truly a piece of cake.
        </p>
        <a
          href="#quote"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-opacity-90 transition"
        >
          Get a Free Quote
        </a>
        <p className="text-black pt-10 pb-5">Submit a form or call us at </p>
        <p className="text-black">(929) 242-7070</p>

      </div>
    </section>
  );
}
