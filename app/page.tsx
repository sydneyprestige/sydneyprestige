export default function SydneyPrestigePaintingWebsite() {
  const beforeAfterProjects = [
  {
    title: "Front Facade Restoration",
    before: "/projects/before-house.jpg",
    after: "/projects/after-house.jpg",
  },
  {
    title: "Commercial Bank Repaint",
    before: "/projects/bank-before.jpg",
    after: "/projects/bank-after.jpg",
  },
  {
    title: "Exterior House Refresh",
    before: "/projects/grey-house-before.jpg",
    after: "/projects/grey-house-after.jpg",
  },
]
  

  const galleryImages = [
    "/projects/wardrobe-renovation.jpg",
    "/projects/interior-room.jpg",
    "/projects/front-door-restoration.jpg",
    "/projects/external-house.jpg",
    "/projects/belle-fleur.jpg",
    "/projects/heritage-hallway-before.jpg",
  ]

  return (
    <div className="min-h-screen bg-[#07142b] text-white font-sans">

      {/* HERO */}

      <section className="relative min-h-screen overflow-hidden">

        <img
          src="/projects/pittori.png"
          alt="Sydney Prestige Painting Team"
          className="absolute inset-0 w-full h-full object-cover object-center scale-90"
        />

        <div className="absolute inset-0 bg-[#07142b]/70" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <div className="inline-block px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm tracking-widest uppercase mb-6">
              Residential & Commercial Painting
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Sydney Prestige
              <span className="block text-yellow-400">
                Painting
              </span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed mb-10">
              Premium residential, commercial and heritage
              painting services across Sydney. Delivering
              flawless finishes, meticulous preparation and
              long-lasting results.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#quote"
                className="bg-yellow-500 hover:bg-yellow-400 transition text-[#07142b] font-semibold px-8 py-4 rounded-2xl"
              >
                Get Free Quote
              </a>

              <a
                href="#projects"
                className="border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition px-8 py-4 rounded-2xl"
              >
                View Our Work
              </a>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  10+
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  500+
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-yellow-400">
                  100%
                </h3>
                <p className="text-gray-300 text-sm mt-2">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="py-24 bg-[#091a36]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Our Services
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Painting Solutions
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              High-end finishes for residential, commercial
              and heritage properties throughout Sydney.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Interior Painting",
              "Exterior Painting",
              "Commercial Painting",
              "Heritage Restoration",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-400 text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service}
                </h3>

                <p className="text-gray-400">
                  Premium preparation, expert application
                  and long-lasting finishes.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>      
      
      {/* QUOTE FORM */}

      <section
        id="quote"
        className="py-24"
      >
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Free Quote
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Request A Free Quote
            </h2>

            <p className="text-gray-400">
              Complete the form below and we'll contact
              you shortly regarding your project.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">

            <form
              action="https://formspree.io/f/xeedenbk"
              method="POST"
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl bg-[#091a36] border border-white/10"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-4 rounded-xl bg-[#091a36] border border-white/10"
              />

              <input
                type="text"
                name="suburb"
                placeholder="Suburb"
                required
                className="w-full p-4 rounded-xl bg-[#091a36] border border-white/10"
              />

              <select
                name="service"
                className="w-full p-4 rounded-xl bg-[#091a36] border border-white/10"
              >
                <option>Residential Painting</option>
                <option>Commercial Painting</option>
                <option>Interior Painting</option>
                <option>Exterior Painting</option>
                <option>Heritage Restoration</option>
              </select>

              <textarea
  name="message"
  rows={6}
  
                placeholder="Tell us about your project..."
                required
                className="w-full p-4 rounded-xl bg-[#091a36] border border-white/10"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#07142b] font-bold py-4 rounded-xl transition"
              >
                Request Free Quote
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* BEFORE & AFTER */}

      <section
        id="projects"
        className="py-24 bg-[#091a36]"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Featured Projects
            </p>

            <h2 className="text-5xl font-bold">
              Before & After Transformations
            </h2>

          </div>

          <div className="space-y-24">

            {beforeAfterProjects.map((project, index) => (
              <div key={index}>

                <h3 className="text-3xl font-bold text-center mb-8">
                  {project.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">

                  <div>

                    <div className="text-center text-yellow-400 font-semibold mb-4">
                      BEFORE
                    </div>

                    <img
                      src={project.before}
                      alt="Before"
                     className="rounded-3xl border border-white/10 w-full aspect-[4/3] object-cover"
                    />

                  </div>

                  <div>

                    <div className="text-center text-yellow-400 font-semibold mb-4">
                      AFTER
                    </div>

                    <img
                      src={project.after}
                      alt="After"
                      className="rounded-3xl border border-white/10 w-full aspect-[4/3] object-cover"
                    />

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* GALLERY */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Additional Projects
            </h2>

            <p className="text-gray-400">
              Residential, commercial and heritage projects
              completed throughout Sydney.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/10"
              >
                <img
                  src={image}
                  alt="Project"
                  className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}

          </div>

          <div className="text-center mt-12">

            <button className="bg-yellow-500 text-[#07142b] font-bold px-8 py-4 rounded-2xl">
              View Full Gallery
            </button>

          </div>

        </div>

      </section>      {/* TESTIMONIALS */}

      <section className="py-24 bg-[#091a36]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Testimonials
            </p>

            <h2 className="text-5xl font-bold">
              What Our Clients Say
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-6">
                Sydney Prestige Painting transformed our
                home completely. Professional, reliable
                and the finish exceeded our expectations.
              </p>

              <h4 className="font-bold">
                Sarah M.
              </h4>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-6">
                Excellent communication from start to finish.
                The preparation work and attention to detail
                were outstanding.
              </p>

              <h4 className="font-bold">
                Michael R.
              </h4>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 mb-6">
                Highly recommended. Quality workmanship,
                punctual team and a fantastic final result.
              </p>

              <h4 className="font-bold">
                Emma T.
              </h4>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-400 text-[#07142b]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Ready To Transform
            <br />
            Your Property?
          </h2>

          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Contact Sydney Prestige Painting today for a free
            consultation and obligation-free quote.
          </p>

          <a
            href="#quote"
            className="inline-block bg-[#07142b] text-white px-10 py-4 rounded-2xl font-bold hover:opacity-90 transition"
          >
            Request Free Quote
          </a>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-12 bg-[#061122] border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Sydney Prestige Painting
            </h3>

            <p className="text-gray-400 mb-2">
              Residential • Commercial • Heritage Painting
            </p>

            <p className="text-gray-400 mb-6">
              Sydney, New South Wales
            </p>

            <a
              href="mailto:info@sydneyprestigepainting.com.au"
              className="text-yellow-400 hover:text-yellow-300 transition"
            >
              info@sydneyprestigepainting.com.au
            </a>

            <div className="mt-8 pt-8 border-t border-white/10">

              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Sydney Prestige Painting.
                All Rights Reserved.
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}