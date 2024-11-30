import React from "react";

function BlogQuote() {
  return (
    <section className="lg:flex items-center justify-between relative gap-2 xl:gap-32 space-y-10 w-full h-full px-5 md:px-10 lg:px-20 mb-40">
      {/* LEFT */}
      <div className="sm:px-12 md:px-16 lg:px-10 xl:px-10 flex flex-col text-center items-center justify-center gap-y-20 w-full lg:w-[30%] xl:w-[40%] 2xl:w-[50%]">
        <h1 className="text-2xl sm:text-5xl text-[#14213d] font-serif italic">
          <q> The best way to predict the future is to create it.</q>
        </h1>
        <p> — Peter Drucker</p>
      </div>

      {/* RIGHT */}
      <div
        className="bg-[url('/image/Logo.png')] bg-fixed bg-contain bg-center md:bg-center lg:bg-right xl:bg-right bg-no-repeat h-[700px] w-full lg:w-[70%] xl:w-[80%] 2xl:w-[50%]"
      >
      </div>
    </section>
  );
}

export default BlogQuote;
