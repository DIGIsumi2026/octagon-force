const words = ["Integrity", "Excellence", "Innovation", "Customer Focus"];

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
