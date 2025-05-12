
const services = [
  {
    title: "Local Moving",
    desc: "Fast, professional moves across NYC boroughs — our experienced team knows the city inside and out. We'll handle elevators, stairs, and tight parking zones with ease.",
    image: "/assets/6.jpg",
  },
  {
    title: "Long Distance Moving",
    desc: "Relocating out of state? We coordinate every detail — secure packing, detailed inventory, and guaranteed delivery windows.",
    image: "/assets/5.jpg",
  },
  {
    title: "Packing & Supplies",
    desc: "No need to shop for boxes or bubble wrap. We provide professional-grade supplies and careful, efficient packing services.",
    image: "/assets/10.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main>
    <section className="bg-accent text-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>

        {services.map((service, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-20 group`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
            <hr className="my-4 border-gray-300"></hr>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-fit object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
