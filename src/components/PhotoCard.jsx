export default function PhotoCard({ photo, toggleFav, isFav }) {

  return (

<div
className="
relative
rounded-2xl
overflow-hidden
shadow-lg
transform
transition-all
duration-300
hover:-translate-y-2
hover:shadow-2xl
"
>

<img
  src={`https://picsum.photos/seed/${photo.id}/600/400`}
  alt={photo.author}
  className="w-full h-72 object-cover"
/>

{/* Overlay */}

<div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">

<p className="text-white text-sm font-semibold">
{photo.author}
</p>

</div>

<button
onClick={() => toggleFav(photo.id)}
className="absolute bottom-4 right-4 text-white text-xl"
>
{isFav ? "❤️" : "🤍"}
</button>

</div>

  );
}