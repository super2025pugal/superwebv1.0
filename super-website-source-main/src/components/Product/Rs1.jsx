import { useState } from "react";

const Rs1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "../images/products/open-end-rotor-2.webp",
    "../images/manufacture/super_rs11.webp"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const productionData352 = [
    ["1", "Traverse motor", "4.5", "6"],
    ["2", "Rotor motor", "45", "60"],
    ["3", "Take-up motor", "3.7", "5"],
    ["4", "Tech motor", "30", "40"],
    ["5", "Trash motor", "11", "15"],
    ["6", "Opening roller L.H", "7.5", "10"],
    ["7", "Opening roller R.H", "7.5", "10"],
    ["8", "Wax drive motor", "0.37", "0.5"],
    ["9", "Conveyor drive motor", "0.75", "1"]
  ];

  const productionData480 = [
    ["1", "Traverse motor", "4.5", "6"],
    ["2", "Rotor motor", "55", "75"],
    ["3", "Take-up motor", "7,5", "10"],
    ["4", "Tech motor", "37", "50"],
    ["5", "Trash motor", "11", "20"],
    ["6", "Opening roller L.H", "15", "20"],
    ["7", "Opening roller R.H", "15", "20"],
    ["8", "Wax drive motor", "0.75", "1"],
    ["9", "Conveyor drive motor", "1.1", "1.5"]
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
     

      {/* Product Overview */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          {/* Image Slider */}
          <div>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', paddingBottom: '100%' }}>
                <img
                  src={images[currentSlide]}
                  alt="Super RS1"
                  style={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }}
                />
                <button
                  onClick={prevSlide}
                  style={{
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,1)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.9)'}
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,1)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.9)'}
                >
                  ›
                </button>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '8px', 
                padding: '16px',
                backgroundColor: '#f9fafb'
              }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      height: '8px',
                      width: currentSlide === index ? '32px' : '8px',
                      backgroundColor: currentSlide === index ? '#3b82f6' : '#d1d5db',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: '#dbeafe',
              color: '#2563eb',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Rotor Spinning Technology
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
              Super RS1
            </h2>
            <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '24px' }}>
              Rotor Spinning Machine
            </p>

            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '16px' }}>
              Building on over two decades of successful innovation in the manufacturing of Sliver and Apparel yarn making machines, we are proud to unveil our latest advancement – the SUPER OS 480i Open End Spinning Machine.
            </p>

            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '16px' }}>
              Whether you're enhancing your current operations or embarking on new projects, the Super RS1 Rotor Spinning Machine is your partner in achieving superior results.
            </p>

            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
              Our commitment extends beyond manufacturing, with exceptional customer service that guarantees long-term satisfaction.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a
                href="../assets/super-os480i-catalogue.pdf"
                target="_blank"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(59,130,246,0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
              >
                Download Product Sheet
              </a>
              <a
                href="https://youtu.be/mY1znGlFKv0?si=wcilCbPNswyPCDTe"
                style={{
                  display: 'inline-block',
                  backgroundColor: 'white',
                  color: '#3b82f6',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '2px solid #3b82f6',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
              >
                Watch Videos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section style={{ backgroundColor: '#f9fafb', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 16px 0' }}>
              Specifications
            </h2>
            <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>
              Comprehensive technical and performance data
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Technical Data */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              gridColumn: 'span 1'
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', 
                padding: '16px 24px',
                color: 'white',
                fontWeight: '600',
                fontSize: '18px'
              }}>
                Technical Data
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    ["Fibre Length", "up to 40 mm"],
                    ["Draft Range From", "11-350"],
                    ["Maximum Rotor RPM", "up to 100,000"],
                    ["Rotor Diameter Size From", "32 to 66 mm"],
                    ["Waxing Device", "(Optional), But Motor Drive is centralised"],
                    ["Winding Angle", "30°-40° adjustable through touch screen"],
                    ["Cheese Head", "Up to 4.0 kg and 300 mm diameter"]
                  ].map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white',
                        borderBottom: '1px solid #e5e7eb'
                      }}
                    >
                      <td style={{ 
                        padding: '16px 24px', 
                        fontWeight: '500', 
                        color: '#111827',
                        width: '50%'
                      }}>
                        {row[0]}
                      </td>
                      <td style={{ 
                        padding: '16px 24px', 
                        color: '#4b5563',
                        width: '50%'
                      }}>
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Production Data Tables */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px', marginTop: '24px' }}>
            {/* Production Data 352 Rotors */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', 
                padding: '16px 24px',
                color: 'white',
                fontWeight: '600',
                fontSize: '18px'
              }}>
                Production Data - 352 Rotors
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f0f4f8', borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>S.no</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>Motors</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>kW</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>HP</th>
                  </tr>
                </thead>
                <tbody>
                  {productionData352.map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white',
                        borderBottom: '1px solid #e5e7eb'
                      }}
                    >
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[0]}</td>
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[1]}</td>
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[2]}</td>
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Production Data 480 Rotors */}
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', 
                padding: '16px 24px',
                color: 'white',
                fontWeight: '600',
                fontSize: '18px'
              }}>
                Production Data - 480 Rotors
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f0f4f8', borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>S.no</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>Motors</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>kW</th>
                    <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '600', color: '#111827' }}>HP</th>
                  </tr>
                </thead>
                <tbody>
                  {productionData480.map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white',
                        borderBottom: '1px solid #e5e7eb'
                      }}
                    >
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[0]}</td>
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[1]}</td>
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[2]}</td>
                      <td style={{ padding: '12px 16px', color: '#4b5563' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Layout Section */}
      <section style={{ backgroundColor: 'white', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 16px 0' }}>
              Machine Layout
            </h2>
            <p style={{ color: '#6b7280', fontSize: '18px', margin: 0 }}>
              Detailed floor plan and dimensions
            </p>
          </div>
          
          <div style={{ 
            backgroundColor: '#eff6ff', 
            borderRadius: '16px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            padding: '32px'
          }}>
            <img
              src="../images/products/rs1.webp"
              alt="Super RS1 Layout"
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ 
        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', margin: '0 0 16px 0' }}>
            Ready to Transform Your Production?
          </h2>
          <p style={{ color: '#dbeafe', fontSize: '18px', marginBottom: '32px' }}>
            Contact our team to learn more about the Super RS1 and how it can optimize your operations.
          </p>
           <a href="/contact">
  <button
    style={{
      backgroundColor: 'white',
      color: '#3b82f6',
      padding: '16px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      transition: 'all 0.3s',
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = '#f9fafb')}
    onMouseOut={(e) => (e.target.style.backgroundColor = 'white')}
  >
    Get in Touch
  </button>
</a>
        </div>
      </section>
    </div>
  );
};

export default Rs1;