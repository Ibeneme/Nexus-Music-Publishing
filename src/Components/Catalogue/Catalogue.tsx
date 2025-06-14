import "./Catalogue.css";
import { FaSpotify } from "react-icons/fa";

const catalogueItems = [
  {
    // title: "Sacrifice",
    artist: "Drizz",
    embedSpotify:
      "https://open.spotify.com/playlist/0TTvkdAQ9Lp2g7WmRZV9gi?si=5e607c243c694da2",
    apple: "",
    location: "Nigeria",
  },
  {
    //title: "Victory",
    artist: "Aramide",
    embedSpotify:
      "https://open.spotify.com/artist/3MnR60ldjXYo42lHIZEPvo?si=Xvl08oivTDSxaAscHQbz-Q",
    apple: "",
    location: "Nigeria",
  },
  {
    //title: "So It Goes",
    artist: "Graham BMG",
    embedSpotify:
      "https://open.spotify.com/artist/0mlVlGzMbIQvvR9ttBWFW3?si=ks5SBnfGQ_mnpmVRw7o8RQ",
    apple: "",
    location: "Nigeria",
  },
  {
    //title: "January 9th",
    artist: "Tegha",
    embedSpotify:
      "https://open.spotify.com/artist/4JaPodDelWK74qBNwXwy9a?si=f33041e_TFiIIzU_9QanjQ",
    apple: "",
    location: "Nigeria",
  },

  //   {
  //     //title: "Declan Rice",
  //     artist: "Odumodublvck",
  //     embedSpotify:
  //       "https://open.spotify.com/embed/track/0QdQh3umB7stVOExuHlWvl?utm_source=generator",
  //     apple: "",
  //     location: "Nigeria",
  //   },
  //   {
  //     //title: "Legolas",
  //     artist: "Odumodublvck",
  //     embedSpotify:
  //       "https://open.spotify.com/embed/track/0OWPr4POCQ7iH9BGmTxOZV?utm_source=generator",
  //     apple: "",
  //     location: "Nigeria",
  //   },
  //   {
  //     //title: "Toy Girl",
  //     artist: "Odumodublvck",
  //     embedSpotify:
  //       "https://open.spotify.com/embed/track/3iHp95MVzN1hBiOuR0cJmy?utm_source=generator",
  //     apple: "",
  //     location: "Nigeria",
  //   },
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
      <div className="catalogue-header">
        <h2 style={{ fontWeight: 700 }}>
          Our <span className="decorated-text-b">Publishing Catalogue</span>
        </h2>
        <p>
          Explore our collection of synced tracks, bold songs, and standout
          Nigerian composers. From Afrobeat anthems to cinematic scores,
          discover the sounds shaping Africa’s creative future all available on
          top streaming platforms.
        </p>
      </div>

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
