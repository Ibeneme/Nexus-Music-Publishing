import "./MusicBeatVisualizer.css";

const MusicBeatVisualizer = () => {
  return (
    <div className="music-beat-container">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="beat-bar" />
      ))}
    </div>
  );
};

export default MusicBeatVisualizer;