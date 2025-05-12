export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-14 text-center md:text-left">
        {/* Logo or Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Clever Moving & Storage</h3>
          <p className="text-sm text-gray-300">
            Trusted NYC movers providing reliable, stress-free relocation for homes and businesses.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-300">
            📞 (929) 242-7070<br />
            ✉️ clevermovingnyc@gmail.com<br />
            🗽 Serving all five boroughs and beyond
          </p>
          <a
            href="https://www.yelp.com/biz/clever-moving-and-storage-brooklyn-3" // replace with your Yelp URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-primary underline hover:text-white transition"
          >
            <img src="./src/assets/yelp_burst.png" alt="Yelp" className="h-6 w-auto" />
            <span className="text-sm text-primary underline hover:text-white">See us on Yelp</span>
          </a>
        </div>
        {/* Business Hours */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
          <ul className="text-sm text-gray-300 leading-6">
            {["Monday", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <li key={day}>
                {day} <span className="float-right">7:00 AM - 9:00 PM</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Bottom Info */}
        <div className="flex flex-col justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Clever Moving & Storage.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Made with care in New York City 🧡
          </p>
        </div>

      </div>
    </footer>
  );
}
