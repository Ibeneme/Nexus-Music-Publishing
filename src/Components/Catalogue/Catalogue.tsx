import "./Catalogue.css";
import { FaSpotify } from "react-icons/fa";

const catalogueItems = [
  {
    artist: "Drizz",
    embedSpotify:
      "https://open.spotify.com/playlist/0TTvkdAQ9Lp2g7WmRZV9gi?si=5e607c243c694da2",
    apple: "",
    location: "Nigeria",
  },
  {
    artist: "Aramide",
    embedSpotify:
      "https://open.spotify.com/artist/3MnR60ldjXYo42lHIZEPvo?si=Xvl08oivTDSxaAscHQbz-Q",
    apple: "",
    location: "Nigeria",
  },
  {
    artist: "Graham BMG",
    embedSpotify:
      "https://open.spotify.com/artist/0mlVlGzMbIQvvR9ttBWFW3?si=ks5SBnfGQ_mnpmVRw7o8RQ",
    apple: "",
    location: "Nigeria",
  },
  {
    artist: "Tegha",
    embedSpotify:
      "https://open.spotify.com/artist/4JaPodDelWK74qBNwXwy9a?si=f33041e_TFiIIzU_9QanjQ",
    apple: "",
    location: "Nigeria",
  },
  {
    artist: "Attifaya",
    embedSpotify:
      "https://open.spotify.com/artist/4cAyqsHFXraGJp8eztAeO0?si=PU8qH7LsSyOZ8Hu1h9Fk7g",
    apple: "",
    location: "Nigeria",
  },
  {
    artist: "Ehl3rs",
    embedSpotify:
      "https://open.spotify.com/artist/7EcmYOlVjYbUI8n4otZQ0M?si=IGn7hFHaTbSr-Q0pI7hYCA",
    apple: "",
    location: "Nigeria",
  },
];

const Catalogue = () => {
  const getSpotifyEmbedInfo = (
    url: string
  ): { type: string; id: string } | null => {
    const match = url.match(
      /spotify\.com\/(artist|album|playlist|track)\/([a-zA-Z0-9]+)/
    );
    if (!match) return null;
    return { type: match[1], id: match[2] };
  };

  return (
    <section className="catalogue-section">
      <div className="catalogue-grid">
        {catalogueItems.map((item, idx) => {
          const embedInfo = getSpotifyEmbedInfo(item.embedSpotify);

          return (
            <div key={idx} style={{ marginBottom: 40 }}>
              {embedInfo && (
                <iframe
                  src={`https://open.spotify.com/embed/${embedInfo.type}/${embedInfo.id}`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              )}

              <div className="catalogue-info">
                <h3
                  style={{
                    fontWeight: 700,
                  }}
                >
                  By {item.artist}
                </h3>
                {/* <p>by {item.artist}</p> */}
                <div className="catalogue-links">
                  {item.embedSpotify && (
                    <a
                      href={item.embedSpotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSpotify className="catalogue-icon spotify" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Catalogue;
