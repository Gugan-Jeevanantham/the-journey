function Particles() {

  const particles = Array.from({ length: 30 });

  return (
    <div className="hero__particles">

      {particles.map((_, index) => (
        <span
          key={index}
          className="hero__particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
          }}
        />
      ))}

    </div>
  );
}

export default Particles;