import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

const page = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  return (
    <>
      <section className="profile_container">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col max-w-sm mx-auto p-4 relative h-[30rem] items-center">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="hover" imageUrl="" />

          <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
            Name LastName
          </h2>
          <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-11">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quam aliquid autem numquam earum corporis dicta veritatis animi voluptatibus fugiat?
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
