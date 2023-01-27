import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=9da82be405d4c60581aa5478eac5a945`
  );
  const res = await data.json();
  return (
    <main>
      <h1 className="text-3xl font-bold text-red-500 my-4">The MOVIES</h1>
      <div className="grid gap-8 grid-cols-fluid">
        {res?.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
