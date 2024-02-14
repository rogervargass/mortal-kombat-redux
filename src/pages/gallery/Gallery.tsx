import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/back-button/BackButton";
import Loading from "../../components/loading/Loading";
import { fetchScreenshots } from "../../slices/gallerySlice";
import { RootState } from "../../store/store";
import { FetchStatus } from "../../types/Fetch";
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

  return (
    <>
      <main className="gallery-page">
        <section className="container">
          <h1 className="title">Game Screenshots</h1>
          {status === FetchStatus.LOADING && <Loading />}

          {status === FetchStatus.SUCCEEDED && (
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
          )}

          {status === FetchStatus.ERROR && (
            <p>Falha ao buscar imagens! Error: {error}</p>
          )}
        </section>
        <div className="back-button">
          <BackButton />
        </div>
      </main>
    </>
  );
}

export default Gallery;
