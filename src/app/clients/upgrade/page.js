'use client'

import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../../components/Footer';

export default function ServiceSelectionPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { months: 3, label: '3 Months' },
    { months: 6, label: '6 Months' },
    { months: 9, label: '9 Months' },
    { months: 12, label: '12 Months' },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Main Content */}
      <div className="container" style={{ paddingTop: '100px', flex: 1 }}>
        <h1 className="text-center mb-4">Service Selection</h1>
        
        <div className="row">
          {services.map((service) => (
            <div key={service.months} className="col-md-3 mb-3">
              <button
                className={`btn btn-outline-primary w-100 ${
                  selectedService?.months === service.months ? 'active' : ''
                }`}
                onClick={() => handleServiceSelect(service)}
              >
                {service.label}
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="text-center mt-4">
            <p>Selected Service: {selectedService.label}</p>
            <Link href={`/payment?service=${selectedService.months}`}>
              <a className="btn btn-success">Continue</a>
            </Link>
          </div>
        )}
      </div>

      {/* Footer always stays at the bottom */}
      <Footer />
    </div>
  );
}
