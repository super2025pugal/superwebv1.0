import React, { useState, useEffect } from 'react';

const Spares = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const spares = [
    { img: "./images/spares/spare1.webp", title: "Rotor cup with bearing" },
    { img: "./images/spares/spare2.webp", title: "Opening Roller" },
    { img: "./images/spares/yarn_sensor.webp", title: "Yarn Sensor" },
    { img: "./images/spares/motor.webp", title: "Feed stepper motor" },
    { img: "./images/spares/spare7.webp", title: "Top roller" },
    { img: "./images/spares/spare8.webp", title: "Top roller for simplex" },
    { img: "./images/spares/spare9.webp", title: "Sliver delivery parts" },
    { img: "./images/spares/winding.webp", title: "Winding Drums" },
    { img: "./images/spares/navels.webp", title: "High Performance Navels" },
    { img: "./images/spares/opening_rolls.webp", title: "Opening Rollers" },
    { img: "./images/spares/rotor_cup.webp", title: "Rotor Cup with Bearings" }
  ];

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width <= 500) setSlidesPerView(1);
    else if (width <= 700) setSlidesPerView(2);
    else if (width <= 900) setSlidesPerView(3);
    else if (width <= 1200) setSlidesPerView(4);
    else setSlidesPerView(5);
  };

  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesPerView]);

  const maxIndex = Math.ceil(spares.length / slidesPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalDots = Math.ceil(spares.length / slidesPerView);

  return (
    <section style={styles.sparesSection}>
      <header style={styles.sparesHeader}>
        <h2 style={styles.mainText}>Replaceable Spares for textile machineries</h2>
        <p style={styles.subText}>Seamless operations start with dependable spares for your textile machines!</p>
      </header>
      <main style={styles.sparesSlideBox}>
        <div style={styles.sliderWrapper}>
          <div style={{...styles.sparesSlider, transform: `translateX(-${currentIndex * 100}%)`}}>
            {spares.map((spare, index) => (
              <div key={index} style={styles.slideOut}>
                <div style={styles.sparesSlideInn}>
                  <img src={spare.img} alt={spare.title} style={styles.image} />
                  <div style={styles.slideBody}>
                    <h3 style={styles.miniText}>{spare.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.sliderControls}>
          <button 
            style={{...styles.sliderBtn, ...(currentIndex === 0 && styles.sliderBtnDisabled)}} 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ‹
          </button>
          <div style={styles.sliderDots}>
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                style={{...styles.dot, ...(i === currentIndex && styles.dotActive)}}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
          <button 
            style={{...styles.sliderBtn, ...(currentIndex >= maxIndex && styles.sliderBtnDisabled)}} 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
          >
            ›
          </button>
        </div>
      </main>
    </section>
  );
};

const styles = {
  sparesSection: {
    background: 'linear-gradient(to bottom, #f8fafc, #e2e8f0)',
    padding: '80px 0',
    position: 'relative',
  },
  sparesHeader: {
    textAlign: 'center',
    marginBottom: '50px',
    color: '#1e293b',
    padding: '0 20px',
  },
  mainText: {
    color: '#0f172a',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px',
  },
  subText: {
    color: '#475569',
    fontSize: '1.1rem',
  },
  sparesSlideBox: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sliderWrapper: {
    overflow: 'hidden',
    position: 'relative',
  },
  sparesSlider: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  slideOut: {
    minWidth: '20%',
    padding: '15px',
    flexShrink: 0,
  },
  sparesSlideInn: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    height: '100%',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  slideBody: {
    textAlign: 'center',
  },
  miniText: {
    color: '#1e293b',
    fontSize: '16px',
    fontWeight: '600',
    margin: '0',
  },
  sliderControls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginTop: '30px',
  },
  sliderBtn: {
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '20px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderBtnDisabled: {
    background: '#94a3b8',
    cursor: 'not-allowed',
  },
  sliderDots: {
    display: 'flex',
    gap: '8px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#64748b',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  dotActive: {
    background: '#3b82f6',
    width: '24px',
    borderRadius: '5px',
  },
};

export default Spares;