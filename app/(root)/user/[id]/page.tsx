import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

const page = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  return (
    <>
      <section className="profile_container">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col max-w-sm mx-auto p-4 relative h-[30rem] items-center justify-center">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard
            text="hover"
            imageUrl="https://imgs.search.brave.com/DTtgI9gP71rAujZ5EsH6rZYUa9U_RCFZMdioNkz8480/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9hdmF0/YXJzLmdpdGh1YnVz/ZXJjb250ZW50LmNv/bS91Lzc1ODQ0OTkx/P3Y9NA"
          />

          <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
            Name LastName
          </h2>
          <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-11">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
            aliquid autem numquam earum corporis dicta veritatis animi
            voluptatibus fugiat?
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-5 lg:mt-5">
          <p className="text-30 bold">All Projects</p>
          <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 justify-center">
            {[
              {
                id: 123,
                title: "Asish Kumar Panda",
                desc: "A great developer",
              },
              {
                id: 1231,
                title: "Asish Kumar Panda",
                desc: "A great developer",
              },
              {
                id: 1232,
                title: "Asish Kumar Panda",
                desc: "A great developer",
              },
              {
                id: 1233,
                title: "Asish Kumar Panda",
                desc: "A great developer",
              },
            ].map((item, i) => (
              <ThreeDCardDemo key={item.id}/>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
