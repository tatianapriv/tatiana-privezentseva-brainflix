import "./Videos.scss";
import { Link } from "react-router-dom";
import { api } from "../../pages/Home/Home";

function Videos({ selectedVideo, videos }) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <section className="videos">
      <h2 className="videos__title">Next Videos</h2>

      {videos
        .filter((video) => video.id !== selectedVideo.id)
        .map((video) => (
          <Link
            className="videos__box"
            key={video.id}
            to={`/videos/${video.id}`}
            onClick={scrollToTop}
          >
            <div className="videos__picture">
              <img
                className="videos__image"
                src={`${api}${video.image}`}
                alt="video"
              />
            </div>
            <div className="videos__info">
              <p className="videos__name">{video.title}</p>
              <p className="videos__channel">{video.channel}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}

export default Videos;
