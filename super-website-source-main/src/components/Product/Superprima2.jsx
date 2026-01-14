import { useState } from "react";

const Superprima2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    "../images/manufacture/super_prima2.webp",
    "../images/manufacture/super_prima2_inner.webp"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

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
                  alt="Super Prima II"
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
              Non Auto-Leveller Technology
            </span>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', margin: '0 0 8px 0' }}>
              Super Prima II
            </h2>
            <p style={{ fontSize: '20px', color: '#6b7280', marginBottom: '24px' }}>
              Double Delivery Non Auto-Leveller Draw Frame
            </p>

            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '16px' }}>
              The PRIMA-II drawframe stands out for its robust design and advanced features tailored to meet the demanding needs of modern textile manufacturing.
            </p>

            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '16px' }}>
              Its compact footprint is particularly advantageous in facilities where space is at a premium, without compromising on performance or functionality.
            </p>

            <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
              Its advanced features make it a valuable asset for any textile manufacturing operation looking to optimize space, speed, and material handling.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a
                href="../assets/superprima2.pdf"
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
                href="#"
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
              overflow: 'hidden'
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
                    ["Draft Range From", "4 to 10"],
                    ["Range of Staple Length", "up to 75 mm"],
                    ["Delivery Hank", "up to 0.200"],
                    ["Main Motor", "5.5 kW"],
                    ["Suction Motor", "1.5 kW"],
                    ["Can Change Motor", "0.37 kW"],
                    ["Production Capacity", "up to 6100 kg/day"]
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

            {/* Production Data */}
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
                Production Data
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ 
                      padding: '16px 24px', 
                      fontWeight: '500', 
                      color: '#111827',
                      width: '60%'
                    }}>
                      Production @ 90% Efficiency in Ring Spinning Counts at 0.10 Sliver Hank
                    </td>
                    <td style={{ 
                      padding: '16px 24px', 
                      color: '#4b5563',
                      width: '40%'
                    }}>
                     600RPM = 4580 kg/day
                      <br />
                      650 RPM = 4970 kg/day
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ 
                      padding: '16px 24px', 
                      fontWeight: '500', 
                      color: '#111827',
                      width: '60%'
                    }}>
                      Production @ 80% Efficiency in Open End Counts at 0.10 Sliver Hank
                    </td>
                    <td style={{ 
                      padding: '16px 24px', 
                      color: '#4b5563',
                      width: '40%'
                    }}>
                     550 RPM = 3735 kg/day
                      <br />
                      650 RPM = 4415 kg/day
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Power Installation Data */}
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
                Power Installation Data
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ 
                      padding: '16px 24px', 
                      fontWeight: '500', 
                      color: '#111827',
                      width: '60%'
                    }}>
                      Normal Rating of Main Drivers Motors<br />
                      a) Main Motor<br />
                      b) Servo Motor
                    </td>
                    <td style={{ 
                      padding: '16px 24px', 
                      color: '#4b5563',
                      width: '40%'
                    }}>
                      <br />
                      <br />
                      5.5 kW<br />
                      3.0 kW
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ 
                      padding: '16px 24px', 
                      fontWeight: '500', 
                      color: '#111827',
                      width: '60%'
                    }}>
                      Normal Rating of Auxiliary Motors<br />
                      a) Suction Motor<br />
                      b) Can Change Motor
                    </td>
                    <td style={{ 
                      padding: '16px 24px', 
                      color: '#4b5563',
                      width: '40%'
                    }}>
                      <br />
                        <br />
                      1.5 kW<br />
                      0.37 kW
                    </td>
                  </tr>
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
              src="../images/products/superprima-2-layout.png"
              alt="Super Prima II Layout"
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
            Contact our team to learn more about the Super Prima II and how it can optimize your operations.
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

export default Superprima2;
