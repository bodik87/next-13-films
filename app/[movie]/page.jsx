import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=9da82be405d4c60581aa5478eac5a945`
  );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetails({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=9da82be405d4c60581aa5478eac5a945`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  return (
    <div>
      <Link className="text-red-500" href={`/`}>{`< Home`}</Link>
      <div>
        <h1 className="text-2xl">{res.title}</h1>
        <h2 className="text-xl">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-1 px-4 rounded-sm">
          {res.status}
        </h2>
        <Image
          className="my-5 w-full rounded-2xl"
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={1000}
          height={1000}
          priority
        />
        <p>{res.overview}</p>
      </div>
    </div>
  );
}
