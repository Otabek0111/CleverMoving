const services = [
  {
    title: "Local Moving",
    desc: "We handle NYC apartment moves with speed and care — stairs, tight hallways, and all.",
    image: "/assets/aboutUs/1.jpg",
  },
  {
    title: "Long Distance",
    desc: "Moving out of state? We'll plan, pack, and deliver it all — coast to coast.",
    image: "/assets/aboutUs/2.jpg",
  },
  {
    title: "Packing & Supplies",
    desc: "We bring boxes, tape, padding — and expert packing skills. You don't lift a finger.",
    image: "/assets/aboutUs/8.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="opacity-1 translate-y-10 transition-all duration-700 ease-out animate-on-scroll bg-white rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-1 hover:shadow-amber-200 overflow-hidden"
              style={{ animationDelay: `${i * 300}ms`, animationFillMode: "both" }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-fill object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
