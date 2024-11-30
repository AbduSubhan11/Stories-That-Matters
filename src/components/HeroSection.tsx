import Image from "next/image";
import React from "react";
import Link from "next/link";
import heroImg1 from "../../public/image/hero 1.webp";
import heroImg2 from "../../public/image/hero 2.webp";

function HeroSection() {
  return (
    <section className="px-5 md:px-10 lg:px-20">
      <div className="lg:flex gap-40 ustify-between lg:space-y-0 space-y-16">
        {/* LEFT */}
        <div className="lg:w-[50%]">
          <Image
            src={heroImg1}
            alt="Hero Image 1"
            width={800}
            height={100}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* RIGHT */}
        <div className="lg:w-[50%] w-full sm:p-0 p-5 gap-8 flex flex-col items-center">
          <div className="space-y-10 ">
            <h1 className="text-2xl font-serif text-center text-[#3A414E]">
              My Thoughts
            </h1>
            <Image src={heroImg2} alt="Hero Image 2" width={450} height={100} />
          </div>
          <div className=" max-w-md sm:gap-20 gap-16 p-5 flex flex-col items-center justify-center">
            <p className="italic">
              Discover articles across technology, lifestyle, personal growth,
              and beyond, all crafted to inform, inspire, and spark curiosity.{" "}
            </p>

            <Link
              href={"/blogs"}
              className="bg-[#14213d] flex items-center w-fit px-10 py-2 text-[#F58515] hover:bg-[#F58515] hover:text-[#14213d] transition-all duration-500"
            >
              All Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
