import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <p className="tag relative">01 January 2025</p>
        <h1 className="heading relative">
          This is a great masterpiece project
        </h1>
        <p className="sub-heading !max-w-5xl relative line-clamp-3">
          This is a nice Project description
        </p>
      </div>

      <section className="section_container">
        <img
          src="https://imgs.search.brave.com/DTtgI9gP71rAujZ5EsH6rZYUa9U_RCFZMdioNkz8480/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLmdpdGh1YnVz/ZXJjb250ZW50LmNv/bS91Lzc1ODQ0OTkx/P3Y9NA"
          alt=""
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href="/" className="flex gap-2 items-center mb-3">
              <Image
                src="https://imgs.search.brave.com/DTtgI9gP71rAujZ5EsH6rZYUa9U_RCFZMdioNkz8480/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLmdpdGh1YnVz/ZXJjb250ZW50LmNv/bS91Lzc1ODQ0OTkx/P3Y9NA"
                alt=""
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium"> AUTHOR NAME</p>
                <p className="text-16-medium !text-black-300">@USERNAME</p>
              </div>
            </Link>
            <p className="category-tag">
                Electronics
            </p>
          </div>
          <h3 className="text-30-bold">PROJECT DETAILS</h3>
          <p className="no-result"> No Details Provided</p>
        </div>
        <hr className="divider" />
      </section>
    </>
  );
};

export default page;
