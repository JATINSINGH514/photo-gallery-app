import PhotoCard from "./PhotoCard";

export default function Gallery({ photos, toggleFav, favourites }) {

  return (

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

{photos.map((photo) => (

<PhotoCard
key={photo.id}
photo={photo}
toggleFav={toggleFav}
isFav={favourites.includes(photo.id)}
/>

))}

</div>

  );
}