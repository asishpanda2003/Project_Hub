import { auth } from "@/auth";
import { ProjectTypeCard } from "@/components/ProjectCard";
import SearchForm from "@/components/SearchForm";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { Boxes } from "@/components/ui/background-boxes";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { log } from "console";

export default async function Home({
  searchParam,
}: {
  searchParam: Promise<{ query?: string }>;
}) {
  const query = (await searchParam);
  const params = { search: query || null };
  const session = await auth();
  // console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: PROJECT_QUERY, params });

  console.log(params);
  
  return (
    <>
      <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className="heading relative">Welcome to project hub</h1>
        <p className="sub-heading !max-w-3xl relative">
          Where ideas connect and projects shine 🌈
        </p>

        <SearchForm query={query} />
      </div>
      <section className="section_container">
        <p className="text-30 font-semibold">Trending Projects</p>
        <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1 justify-center">
          {
          posts?.length > 0 ? (
            posts.map((post: ProjectTypeCard, index: number) => (
              <ThreeDCardDemo key={post._id} />
            ))
          ) :(
            <p className="no-results">No projects found</p>
          )
          }
        </ul>
      </section>
    </>
  );
}
