const words = ["Camera", "Security", "Smart Home", "Monitoring", "Access Control"];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>
            <i />
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
