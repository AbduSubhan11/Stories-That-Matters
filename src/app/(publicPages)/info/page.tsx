import Image from "next/image";
import React from "react";
import infoPic from "../../../../Public/Image/infobg.webp";

function Page() {
  return (
    <section className="bg-white ">
      <div className="w-full ">
        <Image
          src={infoPic}
          alt="Info Pic"
          width={1000}
          height={100}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="text-center space-y-8">
          <h1 className="text-8xl font-bold text-[#14213d]">Info.</h1>
          <p className="px-10 sm:px-20 md:px-28 lg:px-72">
            Welcome to our site This is a space where we curate and share a wide
            range of insightful, entertaining, and informative blogs from
            various writers around the web. Whether you&apos;re looking for the
            latest tech trends, personal growth stories, or fun tutorials, our
            blog has something for everyone.
          </p>
          <p className="px-10 sm:px-20 md:px-28 lg:px-72">
            Our mission is to deliver high-quality, diverse content to our
            readers by gathering articles from multiple sources. We aim to
            create a place where knowledge seekers and casual readers alike can
            find something interesting, no matter what they&apos;re looking for.
            Our blog covers a wide range of topics, including technology,
            lifestyle, health, education, travel, and much more. We pull content
            from various sources to ensure you have access to the latest and
            most relevant posts across different domains.
          </p>
        </div>
        <div className="space-y-5 md:p-0 p-5">
          <p className="text-center">
            For any general inquiries, please fill in the following contact
            form:
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5 py-10"
          >
            <input
              type="hidden"
              name="access_key"
              value="c4cea03b-f4fe-4951-b90f-1285bd336637"
            />
            <div className="md:flex md:space-x-4 space-x-0 md:space-y-0 space-y-5">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                required
                className="border border-black pl-2 h-10 md:w-60 w-full hover:border-2"
              />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                required
                className="border border-black pl-2 h-10 md:w-60 w-full hover:border-2"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your message here..."
                className="border border-black pl-2 h-32 w-full  hover:border-2"
                name="Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#14213d] hover:text-[#14213d] hover:bg-[#F8900A] transition-colors duration-500 text-white w-full h-10"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
