export default function Testimonials() {
  const reviews = [
    { name: "Max K.", text: "Fast, professional move and friendly team." },
    { name: "Nick B.", text: "The smoothest move I’ve ever had." },
    { name: "Suhrob D.", text: "Highly recommend Clever Moving!" }
  ];

  return (
    <div className="bg-base grid px-10 py-10 sm:grid-cols-3 gap-6" data-aos="fade-up">
      {reviews.map((r, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-8 border-primary">
          <p className="italic mb-4">“{r.text}”</p>
          <p className="font-bold">– {r.name}</p>
        </div>
      ))}
    </div>
  );
}
