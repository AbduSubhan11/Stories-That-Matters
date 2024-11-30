"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type BlogArticle = {
  id: number;
  published_at: string;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  user: {
    name: string;
    profile_image: string;
  };
};

function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <section
      className="px-5 sm:px-32 md:px-24 lg:px-52 md:py-10 py-4 mb-20 space-y-10 text-black "
      style={{
        backgroundImage: "url('/image/blogs.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {!data.length ? (
        <div className="h-screen text-2xl flex flex-col items-center justify-center">
          <h1>You can see blogs here when posts are published</h1>
          <h1>Check Your Internet Connection!</h1>
        </div>
      ) : (
        <div className="space-y-10 ">
          {data.map((blog: BlogArticle) => (
            <div
              key={blog.id}
              className="grid md:grid-cols-2 grid-cols-1 h-fit overflow-hidden border"
            >
              {/* LEFT*/}
              <Link href={`/blog/${blog.id}`}>
                <div className="h-full bg-center flex justify-center items-center">
                  <Image
                    src={blog.cover_image || blog.social_image}
                    alt="Cover Image"
                    width={1000}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </Link>

              {/* RIGHT  */}
              <div className="px-5 py-8 md:space-y-10 space-y-5 overflow-hidden">
                <div className="flex space-x-4">
                  <Image
                    src={blog.user.profile_image}
                    alt="Profile Pic"
                    width={100}
                    height={100}
                    className="w-10 rounded-3xl"
                  />
                  <div className="text-black">
                    <p>{blog.user.name}</p>
                    <p>{new Date(blog.published_at).toLocaleString()}</p>
                  </div>
                </div>
                <div className="text-black md:space-y-5 space-y-2 ">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="space-y-8 hover:text-[#006AB6]"
                  >
                    <h1 className="font-bold md:text-2xl text-1xl">
                      {blog.title}
                    </h1>
                    <p className="text-1xl">{blog.description}</p>
                  </Link>
                  <Link
                    href={`blog/${blog.id}`}
                    className="bg-[#14213d] flex items-center w-fit px-4 py-1 text-[#F58515] hover:bg-orange-700 hover:text-white transition-all duration-500"
                  >
                    <h1>Read More</h1>
                    <svg
                      className="h-8 w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="5" y1="12" x2="19" y2="12" />{" "}
                      <line x1="15" y1="16" x2="19" y2="12" />{" "}
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Page;
