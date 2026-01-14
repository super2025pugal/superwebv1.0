import React, { useState, useEffect, useCallback, useRef } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Mouse drag states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  
  const timerRef = useRef(null);
  const sliderRef = useRef(null);

  const slides = [
    { src: "./images/banner/banner1.webp", alt: "Premium textile machinery solutions" },
    { src: "./images/banner/banner2.webp", alt: "Advanced engineering equipment" },
    { src: "./images/banner/banner3.webp", alt: "Industrial automation systems" },
    { src: "./images/banner/banner4.webp", alt: "Cutting-edge textile technology" },
    { src: "./images/banner/banner5.webp", alt: "Cutting-edge textile technology" },
    { src: "./images/banner/banner6.webp", alt: "Manufacturing excellence solutions" }
  ];

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isDragging) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, nextSlide, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setCurrentX(e.pageX);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setCurrentX(e.pageX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === ' ') setIsPlaying(!isPlaying);
  };

  return (
    <>
      <style>{`
        .banner-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
          background: #f3f4f6;
          max-width: 100vw;
          overflow: hidden;
        }

        .banner-slider {
          position: relative;
          width: 100%;
          height: clamp(200px, 50vw, 600px);
          overflow: hidden;
          touch-action: pan-y;
          cursor: grab;
          user-select: none;
        }

        .banner-slider:active {
          cursor: grabbing;
        }

        /* Responsive heights */
        @media (max-width: 374px) {
          .banner-slider { height: 180px; }
        }
        @media (min-width: 375px) and (max-width: 479px) {
          .banner-slider { height: 220px; }
        }
        @media (min-width: 480px) and (max-width: 639px) {
          .banner-slider { height: 280px; }
        }
        @media (min-width: 640px) and (max-width: 767px) {
          .banner-slider { height: 320px; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .banner-slider { height: 380px; }
        }
        @media (min-width: 1024px) and (max-width: 1279px) {
          .banner-slider { height: 450px; }
        }
        @media (min-width: 1280px) and (max-width: 1535px) {
          .banner-slider { height: 520px; }
        }
        @media (min-width: 1536px) {
          .banner-slider { height: 600px; }
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
          pointer-events: none;
        }

        .slide.active {
          opacity: 1;
          pointer-events: auto;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          user-select: none;
          -webkit-user-drag: none;
          display: block;
          pointer-events: none;
        }

        .slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
          z-index: -1;
        }

        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          width: 0%;
          animation: ${isPlaying && !isDragging ? 'progress 6s linear infinite' : 'none'};
          z-index: 10;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }

        @media (min-width: 768px) {
          .progress-bar { height: 4px; }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .dots-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.3);
          padding: 8px 12px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        @media (max-width: 374px) {
          .dots-container {
            bottom: 12px;
            padding: 6px 10px;
            gap: 6px;
          }
        }

        @media (min-width: 768px) {
          .dots-container {
            bottom: 25px;
            gap: 10px;
            padding: 10px 16px;
          }
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.2);
        }

        .dot:focus-visible {
          outline: 2px solid white;
          outline-offset: 2px;
        }

        .dot.active {
          background: white;
          width: 24px;
          border-radius: 4px;
        }

        @media (min-width: 768px) {
          .dot {
            width: 10px;
            height: 10px;
          }
          .dot.active {
            width: 28px;
          }
        }

        .play-pause-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .play-pause-btn:hover {
          background: rgba(0, 0, 0, 0.7);
          transform: scale(1.1);
        }

        @media (max-width: 639px) {
          .play-pause-btn {
            width: 32px;
            height: 32px;
            top: 12px;
            right: 12px;
          }
        }

        /* Drag indicator */
        .drag-hint {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 14px;
          background: rgba(0, 0, 0, 0.6);
          padding: 8px 16px;
          border-radius: 20px;
          pointer-events: none;
          opacity: 0;
          animation: fadeInOut 3s ease-in-out;
          z-index: 5;
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .slide {
            transition: none;
          }
          .progress-bar {
            animation: none;
          }
        }
      `}</style>

      <div 
        className="banner-container"
        onKeyDown={handleKeyDown}
        tabIndex="0"
        role="region"
        aria-label="Image carousel"
        aria-live="polite"
      >
        <div 
          ref={sliderRef}
          className="banner-slider"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
              />
            </div>
          ))}

          <button
            className="play-pause-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            type="button"
          >
            {isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <polygon points="8 5 19 12 8 19" />
              </svg>
            )}
          </button>

          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentSlide ? 'true' : 'false'}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="progress-bar" key={`${currentSlide}-${isPlaying}`}></div>
      </div>
    </>
  );
};

export default Banner;
