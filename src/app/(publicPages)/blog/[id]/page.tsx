"use client";
import AsideBar from "@/components/AsideBar";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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

type Comment = {
  text: string;
  commentTime: string;
};

function Page() {
  const param = useParams();
  const [data, setData] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const publishBtnHandler = () => {
    const newComment: Comment = {
      text: commentValue,
      commentTime: new Date().toLocaleString(),
    };
    setComments((prev: Comment[]) => [...prev, newComment]);
    setCommentValue("");
  };

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.filter((blog: BlogArticle) => blog.id === Number(param.id))
        )
      );
  });

  return (
    <section className="px-5 sm:px-32 md:px-52 py-10 space-y-20 ">
      <div className="lg:flex lg:space-x-10 space-x-0 lg:space-y-0 space-y-16">
        {/* LEFT */}
        <div className="lg:w-[70%] w-full">
          {data.map((blog: BlogArticle) => (
            <div key={blog.id} className=" text-black space-y-8">
              <div className="flex items-center space-x-3">
                <Image
                  src={blog.user.profile_image}
                  alt="Profile image"
                  width={100}
                  height={100}
                  className="w-10 rounded-full"
                />
                <div>
                  <p>{blog.user.name}</p>
                  <p>{new Date(blog.published_at).toLocaleString()}</p>
                </div>
              </div>
              <div className="font-bold font-serif md:text-3xl text-xl sm:pr-40 text-[#3A414E]">
                {blog.title}
              </div>
              <div className=" text-[#797979]">{blog.description}</div>
              <div>
                <Image
                  src={blog.cover_image || blog.social_image}
                  alt="Cover Image"
                  width={1000}
                  height={100}
                />
              </div>
              <div className="bg-[#F2F3F7] p-5 sm:p-8">
                <div className="bg-white text-[#797979] p-5 sm:p-8 italic border-l-2 border-[#415094]">
                  In the ever-evolving landscape of digital content, blogs have
                  emerged as a powerful medium for sharing knowledge,
                  experiences, and insights. A well-crafted blog not only serves
                  as a platform for personal expression but also as a valuable
                  resource for readers seeking information and inspiration.
                </div>
              </div>
              <div className="md:px-8 py-4 space-y-8">
                <div className="border-b text-[#3A414E] font-serif font-semibold">
                  Comments {comments.length}
                </div>
                <div className="space-y-2">
                  {comments.map((comment: Comment, index: number) => (
                    <div key={index}>
                      <p className="bg-gray-600 text-white w-fit p-2 rounded">
                        {comment.text}
                      </p>
                      <p className="text-[15px]">{comment.commentTime}</p>
                    </div>
                  ))}
                </div>
                <div className="border h-12">
                  <input
                    type="text"
                    onChange={(e) => setCommentValue(e.target.value)}
                    value={commentValue}
                    placeholder="Write a comment..."
                    className="w-full h-full pl-2 bg-gray-200"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    className={`flex items-center w-fit px-6 py-2 transition-all duration-500 ${
                      commentValue.trim()
                        ? "bg-[#222222] text-[#F58515] hover:bg-[#F58515] hover:text-[#222222]"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                    onClick={publishBtnHandler}
                    disabled={!commentValue}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AsideBar />
      </div>
    </section>
  );
}

export default Page;
