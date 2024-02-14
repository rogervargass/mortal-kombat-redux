import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchScreenshots } from "../../slices/gallerySlice";
import { RootState } from "../../store/store";
import "./styles.css";

function Gallery() {
  const dispatch = useDispatch();
  const screenshots = useSelector(
    (state: RootState) => state.gallery.screenshots
  );
  const status = useSelector((state: RootState) => state.gallery.status);
  const error = useSelector((state: RootState) => state.gallery.error);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchScreenshots() as any);
  }, [dispatch]);

  const handleClick = (photo: string) => {
    setSelectedPhoto(photo);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      <section className="container">
        <h1 className="title">Game Screenshots</h1>
        <div className="gallery">
          {screenshots.map((image) => (
            <img
              key={image.id}
              src={image.image}
              alt={`Mortal Kombat 2 - Screenshot ${image.id}`}
              className="photo"
              onClick={() => handleClick(image.image)}
            />
          ))}
          {selectedPhoto && (
            <div className="overlay" onClick={() => setSelectedPhoto(null)}>
              <img
                src={selectedPhoto}
                alt={`Selected Photo`}
                className="selected-photo"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Gallery;
