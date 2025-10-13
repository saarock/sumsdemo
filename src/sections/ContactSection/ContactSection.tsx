"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../../components";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    city: "",
    email: "",
    partnerInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    alert("Form submitted! We'll contact you soon.");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">
            Let's Build Your City's Future
          </h2>
          <p className="text-gray-600">
            Share your vision, and we'll help make it reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <select
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="city-leader">City Leader</option>
              <option value="innovator">Innovator</option>
              <option value="citizen">Citizen</option>
              <option value="business">Business Owner</option>
            </select>

            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <select
              value={formData.partnerInterest}
              onChange={(e) =>
                setFormData({ ...formData, partnerInterest: e.target.value })
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            >
              <option value="" disabled>
                Select project type
              </option>
              <option value="smart-mobility">Smart Mobility</option>
              <option value="green-energy">Green Energy</option>
              <option value="digital-health">Digital Healthcare</option>
              <option value="education">Education & Skills</option>
            </select>

            <textarea
              placeholder="Tell us about your city..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
            />

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold rounded-lg transition-all"
            >
              Submit & Schedule a Call
            </Button>

            <p className="text-sm text-gray-500 text-center">
              We'll reply within 24h
            </p>
          </form>

          {/* Map and Contact Info */}
          <div className="space-y-8">
            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Partner Cities in Nepal</h3>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27776841053!2d85.29111107910156!3d27.70903099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Contact Information</h4>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1" />
                <p className="text-gray-600">hello@example.com</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <p className="text-gray-600">Lalitpur, Nepal</p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1" />
                <p className="text-gray-600">555-8888888</p>
              </div>

              <p className="text-sm text-gray-500 pt-4 border-t">
                <span className="text-orange-500 font-medium">Privacy Note:</span>{" "}
                Your data is safe and used only for collaboration purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
