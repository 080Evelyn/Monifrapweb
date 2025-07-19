"use client";

const Contact = () => {
  return (
    <section id="contact" className="w-full mt-10 p-5 md:px-10 lg:py-20">
      <div className="flex flex-col gap-4 items-center lg:px-70">
        <span className="px-2 py-1 text-xs border rounded-full border-primary text-primary">
          Contact us
        </span>
        <h1 className="text-3xl text-center font-medium md:text-7xl text-foreground">
          Have Questions about <span className="text-primary">Monifrap</span>?
        </h1>
        <p className="tracking-[-2%] text-[10px] lg:text-lg px-15 text-center text-muted-foreground">
          Enter any enquires or issues you have and we will respond swiftly.{" "}
        </p>
      </div>

      <div className="relative flex items-center justify-center mt-5 px-4 sm:px-6">
        {/* Main center card container */}
        <div className="relative bg-[#00000005] w-full max-w-[260px] md:max-w-md lg:max-w-lg">
          {/* Left wing */}
          <div className="block bg-[#00000005] translate-x-[calc(-50%-32px))] md:translate-x-[calc(-50%-62px))] w-full rotate-[-12deg] absolute top-1/2 left-1/2 -translate-y-1/2 backdrop-blur-sm border border-black/10 rounded-lg h-[70%]" />

          {/* Right wing */}
          <div className="block absolute translate-x-[calc(-50%+32px))] md:translate-x-[calc(-50%+62px))] w-full rotate-[12deg] top-1/2 left-1/2 -translate-y-1/2 bg-[#00000005] backdrop-blur-sm border border-black/10 rounded-lg h-[70%]" />

          {/* Main card */}
          <div className="relative bg-white/10 backdrop-blur-2xl border border-black/10 rounded-lg overflow-hidden p-3 md:p-4 z-10">
            <span className="absolute top-0 right-0 w-32 h-22 mr-5 bg-gradient-to-br from-primary/70 to-transparent rounded-full blur-xl" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-22 bg-gradient-to-tr from-primary/70 to-transparent rounded-full blur-xl" />

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 relative"
            >
              <div className="flex flex-col gap-2">
                <label className="max-md:text-xs font-semibold">Email</label>
                <input
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-black/5 border border-black/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="max-md:text-xs font-semibold">
                  Ask a Question
                </label>
                <textarea
                  placeholder="Enter your question"
                  className="w-full px-3 py-2 text-sm bg-black/5 border border-black/10 rounded-lg md:min-h-[130px] focus:outline-none focus:ring-2 focus:ring-primary/50 "
                />
              </div>
              <button className="px-4 py-2 bg-primary cursor-pointer text-white rounded-full z-30 hover:bg-primary/80 hover:scale-3d transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
