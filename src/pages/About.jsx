export default function About() {
  return (
    <main>
    <section className="bg-accent text-secondary py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Intro Section */}        
        <img
          src="/assets/logo-png.png"
          alt="Our team in action"
          className="w-full h-fit object-cover rounded-lg shadow-md"
        />
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Clever Moving</h1>
          <p className="text-lg text-gray-700">
            At Clever Moving & Storage, we believe moving shouldn't be a nightmare. That’s why we built a company focused on trust, transparency, and total peace of mind.
          </p>
        </div>


        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/assets/5.jpg"
            alt="Founders"
            className="rounded-lg shadow-md w-full h-80 object-cover hover:shadow-zinc-950 hover:shadow-xl transition"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">How It All Started</h2>
            <p className="text-gray-700 mb-3">
              We started as two friends with a pickup truck and a goal — to take the stress out of New Yorkers' moving days. What began as weekend gigs has now become a full-scale operation across boroughs and beyond.
            </p>
            <p className="text-gray-700">
              From our first move to now, we’ve been guided by a simple philosophy: move people with care, speed, and honesty.
            </p>
          </div>
        </div>

          {/* Meet Nick - Manager */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/assets/12nick.jpg"
              alt="Nick, Manager"
              className="rounded-lg shadow-md w-full h-[50vh] object-cover hover:shadow-zinc-950  hover:shadow-xl transition"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet Nick – Operations Manager</h2>
              <p className="text-gray-700 mb-3">
                Nick is the heart of day-to-day operations at Clever Moving. From scheduling jobs and coordinating crews
                to checking in with clients personally, he's committed to making every move smooth and stress-free.
              </p>
              <p className="text-gray-700">
                With a background in logistics and a passion for customer care, Nick ensures every box, truck, and customer is handled with professionalism and heart.
              </p>
            </div>
          </div>
          
        {/* Mission & Values */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 m-32 pb-10">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Transparency", text: "Upfront pricing. No surprise fees." },
              { title: "Reliability", text: "We show up on time. Every time." },
              { title: "Care", text: "Your stuff is our stuff — packed and handled with precision." },
              { title: "Efficiency", text: "Fast-moving crews. Streamlined logistics." },
              { title: "Support", text: "Questions? We’re here for you anytime, call us or email us for a quick response" },
              { title: "Local Pride", text: "NYC is our home — and we love helping our neighbors." },
            ].map((item, i) => (
              <div key={i} className="bg-base-100 p-8 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-zinc-950 transition">
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Extra Image Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-700">
              We blend muscle and mindfulness. Every box is packed like it’s fragile, every truck is loaded like Tetris. We don’t just move things — we move people forward.
            </p>
          </div>
          <img
            src="/assets/4.jpg"
            alt="Packing team"
            className="rounded-lg shadow-md w-full h- object-cover"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold mb-4">Ready to move with us?</h2>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-semibold"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
    </main>
    
  );
}
