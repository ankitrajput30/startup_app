import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Ankit' },
    _id: 1,
    description: 'This is a description',
    // image: "https://media.istockphoto.com/id/1495736386/photo/ai-chatbot-artificial-intelligence-digital-concept.jpg?s=1024x1024&w=is&k=20&c=5R3Fe2ZpG6pfkGDqwIEFJ-uB_4Mu6CyzB4u9Q5rpQ0k=",
    image: "https://media.istockphoto.com/id/1634086519/photo/human-and-robot-hands-forming-a-heart-shape-together-ai-and-human-collaboration-concept.jpg?s=612x612&w=0&k=20&c=9SjdT3FGgqYwJb564yfCgf4AgCCqV2zrd9SawBoutDg=",
    category: "Robots",
    title: "We Robots"
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Showcase Your Idea, <br /> Network with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Share Ideas, Vote on Pitches & Shine in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts ?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">
              Sorry, No Startups found!
            </p>
          )}
        </ul>

      </section>
    </>
  );
}
