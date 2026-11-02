"use client"
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import FilloutScript from '@/components/FilloutScript';
const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <FilloutScript />
      <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />

      <section id="contact" className="py-16 bg-ukb-gray">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-ukb-lightblue text-ukb-blue text-sm font-medium rounded-full mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
            <p className="text-lg text-ukb-darkgray">
              Have a plumbing issue or question? We're here to help. Reach out to our team for prompt assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-subtle p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-semibold mb-6 text-ukb-darkblue">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ukb-lightblue p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-ukb-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ukb-darkblue mb-1">Phone</h4>
                    <a href="tel:+447359605766" className="text-ukb-darkgray hover:text-ukb-blue transition-colors">
                      07359605766
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ukb-lightblue p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-ukb-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-ukb-darkblue mb-1">Email</h4>
                    <a href="mailto:info@ukbplumbing.co.uk" className="text-ukb-darkgray hover:text-ukb-blue transition-colors">
                      info@ukbplumbing.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ukb-lightblue p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-ukb-blue" />
                  </div>
                  
                </div>
              </div>

              {/* <div className="mt-8 bg-ukb-blue rounded-lg p-6 text-white">
                <h4 className="font-semibold text-xl mb-3">Emergency Service</h4>
                <p className="mb-4">We offer 24/7 emergency plumbing services. Don't hesitate to call us any time.</p>
                <a
                  href="tel:+447359605766"
                  className="inline-flex items-center gap-2 bg-white text-ukb-blue font-medium py-2 px-4 rounded-md transition-colors hover:bg-ukb-lightblue"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div> */}
            </div>

            {/* Fillout Form Embed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-subtle p-6 md:p-8 lg:p-10">
                <h3 className="text-2xl font-semibold mb-6 text-ukb-darkblue">Send Us a Message</h3>

                <div
                  style={{ width: '100%', height: '500px' }}
                  data-fillout-id="s5uwzWcheNus"
                  data-fillout-embed-type="standard"
                  data-fillout-inherit-parameters
                  data-fillout-dynamic-resize
                >
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Booking;
