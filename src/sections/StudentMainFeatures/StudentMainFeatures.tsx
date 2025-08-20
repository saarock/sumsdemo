import React from "react";
import { Button } from "../../components";
import {
  Briefcase,
  Building2,
  CheckCircle,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const StudentMainFeatures = () => {
  return (
    <>
      {/* Main Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Live Projects */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Live Projects
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Work on real challenges from top companies. Build your portfolio
                while solving problems that matter.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Real-World Experience
                    </div>
                    <div className="text-sm text-gray-600">
                      Work on actual business challenges
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Expert Mentorship
                    </div>
                    <div className="text-sm text-gray-600">
                      Get guidance from industry professionals
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Portfolio Building
                    </div>
                    <div className="text-sm text-gray-600">
                      Create impressive project showcases
                    </div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
                View Live Projects
              </Button>
            </div>

            {/* Startup Spark */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Startup Spark
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Turn your ideas into reality. Get funding, mentorship, and
                support to launch your startup journey.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Idea Validation
                    </div>
                    <div className="text-sm text-gray-600">
                      Test and refine your business concept
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Expert Mentors
                    </div>
                    <div className="text-sm text-gray-600">
                      Connect with successful entrepreneurs
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Funding Support
                    </div>
                    <div className="text-sm text-gray-600">
                      Access to investors and funding opportunities
                    </div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
                Start Your Startup
              </Button>
            </div>

            {/* Internships */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Internships
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Get placed with top industry companies. From tech startups to
                major corporations, finding perfect internships.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Top Companies</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Mentorship Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Skill Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">Career Growth</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
                Find Internships
              </Button>
            </div>

            {/* Skill Scanner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Skill Scanner
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Discover your career path with AI-powered assessments. Get
                personalized roadmaps and skill recommendations.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Personal skill profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Career recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Learning pathways</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Job market trends</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto">
                Take Assessment Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentMainFeatures;
