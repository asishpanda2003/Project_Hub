import SearchForm from "@/components/SearchForm";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { Boxes } from "@/components/ui/background-boxes";

const page = () => {
  return (
    <>
      <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className="heading relative">Tailwind is Awesome</h1>
        <p className="sub-heading !max-w-3xl relative">
          Framer motion is the best animation library ngl
        </p>

        <SearchForm />
      </div>
      <section className="section_container">
        <p className="text-30 font-semibold">Trending Projects</p>
        <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1 justify-center">
          {[
            { id: 123, title: "Asish Kumar Panda", desc: "A great developer" },
            { id: 123, title: "Asish Kumar Panda", desc: "A great developer" },
            { id: 123, title: "Asish Kumar Panda", desc: "A great developer" },
            { id: 123, title: "Asish Kumar Panda", desc: "A great developer" },
          ].map((item, i) => (
           <ThreeDCardDemo/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default page;