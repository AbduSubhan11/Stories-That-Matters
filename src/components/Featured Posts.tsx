"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AsideBar from "./AsideBar";

type BlogArticle = {
  id: number;
  date: string;
  title: string;
  description: string;
  cover_image: string | null;
  social_image: string;
  user: {
    name: string;
    profile_image: string;
  };
  published_at: string;
};

function FewBlogs() {
  // const res = await fetch("https://dev.to/api/articles");
  // const data: BlogArticle[] = await res.json();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((res) => setData(res.slice(0, 3)));
  }, []);
  return (
    <section className="px-5 sm:px-32 md:px-36 lg:52 py-52 space-y-20 bg-gray-100">
      <div className="flex justify-center font-thin text-[#3A414E]">
        <h1>FEATURED POSTS</h1>
      </div>
      {!data.length ? (
        <div className="h-screen text-2xl flex flex-col items-center justify-center">
          <h1>You can see blogs here when posts are published</h1>
          <h1>Check Your Internet Connection!</h1>
        </div>
      ) : (
        <div className="lg:flex lg:space-x-10 space-x-0 lg:space-y-0 space-y-16 ">
          {/* LEFT */}
          <div className="lg:w-[70%] w-full space-y-20 ">
            {data.map((blog: BlogArticle) => (
              <div
                key={blog.id}
                className="space-y-5 border p-5 border-gray-300"
              >
                <Image
                  src={blog.cover_image || blog.social_image}
                  alt="Cover Image"
                  width={1000}
                  height={100}
                />
                <div className="flex items-center space-x-4 ">
                  <Image
                    src={blog.user.profile_image}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="w-16 rounded-full"
                  />
                  <div className="text-[#555555]">
                    <p>{blog.user.name}</p>
                    <p>{new Date(blog.published_at).toLocaleString()}</p>
                  </div>
                </div>
                <div className="sm:space-y-2 space-y-4">
                  <h1 className="text-[#3A414E] text-xl font-bold">
                    {blog.title}
                  </h1>
                  <p className="text-[#777777] text-1xl">{blog.description}</p>
                </div>
                <Link
                  href={`blog/${blog.id}`}
                  className="bg-[#14213d] flex items-center w-fit px-6 py-2 text-[#F58515] hover:bg-[#F58515] hover:text-[#14213d] transition-all duration-500"
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
            ))}
          </div>

          {/* RIGTH */}
          <AsideBar />
        </div>
      )}
    </section>
  );
}

export default FewBlogs;
