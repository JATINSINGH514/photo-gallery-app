import { useState, useReducer, useMemo, useCallback, useEffect } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import { favouriteReducer } from "./reducer/favouriteReducer";
import Gallery from "./components/Gallery";

export default function App() {

  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");
  const [favourites, dispatch] = useReducer(favouriteReducer, []);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {

    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }

  };

  const toggleFav = useCallback((id) => {
    dispatch({ type: "TOGGLE_FAV", payload: id });
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center">{error}</p>;

  return (

<div
className="min-h-screen bg-cover bg-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
}}
>

<div className="min-h-screen backdrop-blur-sm bg-black/30 dark:bg-black/70 transition">

{/* Toggle Button */}
<div className="absolute right-10 top-10">

<button
onClick={toggleTheme}
className="px-5 py-2 rounded-full bg-black/50 text-white backdrop-blur"
>
{darkMode ? "☀ Light" : "🌙 Dark"}
</button>

</div>

{/* Hero Section */}

<div className="text-center pt-28">

<h1
className="
text-6xl
font-bold
bg-gradient-to-r
from-cyan-400
to-purple-400
bg-clip-text
text-transparent
tracking-tight
"
>
Discover Photos
</h1>

<p className="text-gray-200 dark:text-gray-300 mt-4">
Explore images from talented photographers
</p>

<div className="mt-8 flex justify-center">

<input
type="text"
placeholder="Search photographers..."
className="
w-[420px]
p-4
rounded-full
shadow-lg
bg-white/90
text-gray-700
placeholder-gray-400
outline-none
text-lg
dark:bg-gray-800
dark:text-white
"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

</div>

</div>

{/* Gallery */}

<div className="mt-20 px-10">

<Gallery
photos={filteredPhotos}
toggleFav={toggleFav}
favourites={favourites}
/>

</div>

</div>

</div>

  );
}