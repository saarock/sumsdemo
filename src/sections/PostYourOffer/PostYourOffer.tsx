import React from "react";
import { Button } from "../../components";
import { Upload } from "lucide-react";

const PostYourOffer = () => {
  return (
    <>
      {/* Post Your Offer form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
              Post Your Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your organization's needs and connect with talented students
              and professionals who can help drive your mission forward.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border border-gray-200 shadow-lg rounded-lg">
              <div className="p-8">
                <form className="space-y-8">
                  {/* Organization Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="org-name"
                        className="text-sm font-medium text-gray-700 block"
                      >
                        Organization Name *
                      </label>
                      <input
                        id="org-name"
                        type="text"
                        placeholder="Enter organization name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="org-type"
                        className="text-sm font-medium text-gray-700 block"
                      >
                        Organization Type *
                      </label>
                      <select
                        id="org-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select organization type</option>
                        <option value="private">Private</option>
                        <option value="public">Public</option>
                        <option value="ngo">NGO</option>
                        <option value="social-enterprise">
                          Social Enterprise
                        </option>
                        <option value="association">Association</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-4">
                      Contact Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-name"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Contact Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your full name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your.email@domain.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Phone *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+977-9800000000"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Opportunity Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-4">
                      Opportunity Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="opportunity-type"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Opportunity Type *
                        </label>
                        <select
                          id="opportunity-type"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select opportunity type</option>
                          <option value="internship">Internship</option>
                          <option value="full-time">Full-time Position</option>
                          <option value="part-time">Part-time Position</option>
                          <option value="project">Project-based</option>
                          <option value="volunteer">Volunteer</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="students-wanted"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Number of Students Wanted
                        </label>
                        <input
                          id="students-wanted"
                          type="number"
                          placeholder="e.g., 5"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="background"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Required Background
                        </label>
                        <input
                          id="background"
                          type="text"
                          placeholder="e.g., Engineering, Business, IT"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="duration"
                          className="text-sm font-medium text-gray-700 block"
                        >
                          Duration
                        </label>
                        <input
                          id="duration"
                          type="text"
                          placeholder="e.g., 3 months, 1 year"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Compensation and Location */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="compensation"
                        className="text-sm font-medium text-gray-700 block"
                      >
                        Compensation
                      </label>
                      <select
                        id="compensation"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select compensation type</option>
                        <option value="paid">Paid</option>
                        <option value="unpaid">Unpaid</option>
                        <option value="stipend">Stipend</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="location"
                        className="text-sm font-medium text-gray-700 block"
                      >
                        Location
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="e.g., Kathmandu, Remote"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* Terms of Reference */}
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700 block">
                      Terms of Reference (TOR)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                          Click to upload TOR document
                        </span>
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div className="space-y-2">
                    <label
                      htmlFor="notes"
                      className="text-sm font-medium text-gray-700 block"
                    >
                      Special Notes
                    </label>
                    <textarea
                      id="notes"
                      placeholder="Any additional requirements or special considerations..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-vertical"
                    />
                    <div className="text-right">
                      <span className="text-xs text-gray-500">0/500</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 rounded-full text-lg"
                    >
                      Submit Offer
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostYourOffer;
