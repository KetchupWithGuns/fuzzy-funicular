import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  CheckCircle,
  ChevronRight,
  Home,
  Phone,
  Mail,
  MapPin,
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
  Building,
  ExternalLink
} from "lucide-react";

export default function JoinUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("agent");
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ role: 'Agent', fullName: '', email: '', phone: '', city: '', experience: '', message: '' });

  async function submitApplication(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/join-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      alert(`Application submitted. ID: ${data.id}`);
      setForm({ role: form.role, fullName: '', email: '', phone: '', city: '', experience: '', message: '' });
      setShowApplyForm(false);
    } catch (err: any) {
      alert(err.message || 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  function updateField(name: string, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ATM Franchise India</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 font-medium hover:text-blue-600">Home</Link>
              <div className="flex items-center space-x-1">
                <a href="#" className="text-gray-700 font-medium hover:text-gray-900">About Us</a>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
              <Link to="/our-products" className="text-gray-700 font-medium hover:text-blue-600">Our Products</Link>
              <Link to="/submit-atm-location" className="text-gray-700 font-medium hover:text-blue-600">Submit ATM Location</Link>
              <a href="#" className="text-gray-700 font-medium hover:text-gray-900">Become Franchise</a>
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-gray-700" />
                <span className="text-gray-700 font-medium">English</span>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Join Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Home
                </Link>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  About Us
                </a>
                <Link
                  to="/our-products"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Our Products
                </Link>
                <Link
                  to="/submit-atm-location"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Submit ATM Location
                </Link>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Become Franchise
                </a>
                <div className="flex items-center px-3 py-2 text-base font-medium text-gray-700">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>English</span>
                </div>
                
                {/* Mobile CTA Buttons */}
                <div className="px-3 py-2 space-y-2">
                  <Button variant="outline" className="w-full justify-center">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Join Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50/30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4 text-gray-500" />
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span className="text-gray-900 font-medium">Join Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Join Our </span>
              <span className="bg-gradient-to-r from-red-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Growing Network
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Multiple opportunities to partner with us and build a successful business in the ATM industry
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg p-3 mb-12">
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setActiveTab("agent")}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-6 rounded-xl transition-all duration-200 ${
                    activeTab === "agent"
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Join as Agent</span>
                </button>
                <button
                  onClick={() => setActiveTab("influencer")}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-6 rounded-xl transition-all duration-200 ${
                    activeTab === "influencer"
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Join as Influencer</span>
                </button>
                <button
                  onClick={() => setActiveTab("employee")}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-6 rounded-xl transition-all duration-200 ${
                    activeTab === "employee"
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Building className="w-5 h-5" />
                  <span className="font-medium">Join as Employee</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === "agent" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Details */}
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Users className="w-6 h-6 text-red-500" />
                      <h2 className="text-2xl font-bold text-gray-900">Sahasra Network Agent</h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Join our mission to build India's largest independent ATM franchise network.
                    </p>

                    {/* Benefits */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white text-center">
                        <div className="font-bold text-lg">No Limit</div>
                        <div className="text-sm opacity-90">Commission Earning</div>
                      </div>
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-4 text-white text-center">
                        <div className="font-bold text-lg">Flexible</div>
                        <div className="text-sm opacity-90">Work Schedule</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-6">
                      {[
                        "Attractive earning potential with competitive commissions",
                        "Flexible work opportunity - full-time or part-time",
                        "Be part of national mission for financial inclusion",
                        "Training & marketing support provided",
                        "Growth path to regional coordinator roles"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setShowApplyForm(!showApplyForm)}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white"
                      >
                        {showApplyForm ? 'Close Application Form' : 'Apply Now'}
                      </button>

                      {showApplyForm && (
                        <form onSubmit={submitApplication} className="mt-4 space-y-3">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input required value={form.fullName} onChange={(e) => updateField('fullName', e.target.value)} placeholder="Full name" className="w-full rounded-md border px-3 py-2" />
                            <input required type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} placeholder="Email" className="w-full rounded-md border px-3 py-2" />
                            <input required value={form.phone} onChange={(e) => updateField('phone', e.target.value)} placeholder="Phone" className="w-full rounded-md border px-3 py-2" />
                            <input value={form.city} onChange={(e) => updateField('city', e.target.value)} placeholder="City" className="w-full rounded-md border px-3 py-2" />
                          </div>

                          <div>
                            <input value={form.experience} onChange={(e) => updateField('experience', e.target.value)} placeholder="Experience (years)" className="w-full rounded-md border px-3 py-2" />
                          </div>

                          <div>
                            <textarea value={form.message} onChange={(e) => updateField('message', e.target.value)} placeholder="Message" className="w-full rounded-md border px-3 py-2" rows={4}></textarea>
                          </div>

                          <Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white">
                            {submitting ? 'Submitting...' : 'Submit Application'}
                          </Button>
                        </form>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Right Column - Image & Requirements */}
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Sales Agent Opportunity"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Agent Requirements</h3>
                      <div className="space-y-3 text-sm text-gray-600">
                        <div>• Passionate and driven individual</div>
                        <div>• Help entrepreneurs set up White Label ATMs</div>
                        <div>• Represent trusted brand with 4+ years experience</div>
                        <div>• Work in preferred region at own pace</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "influencer" && (
              <div className="text-center py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Influencer Program</h2>
                <p className="text-gray-600 mb-8">Coming soon! Join our influencer network to promote financial inclusion.</p>
                <Button disabled className="bg-gray-300 text-gray-500">
                  Program Details Coming Soon
                </Button>
              </div>
            )}

            {activeTab === "employee" && (
              <div className="text-center py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Employee Opportunities</h2>
                <p className="text-gray-600 mb-8">Explore career opportunities with our growing team.</p>
                <Button disabled className="bg-gray-300 text-gray-500">
                  Positions Coming Soon
                </Button>
              </div>
            )}
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600 text-sm mb-3">Speak with our experts</p>
                <p className="text-red-500 font-medium">+91 9072380076</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600 text-sm mb-3">Send us your queries</p>
                <p className="text-green-600 font-medium">atmfranchise@pixellpay.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600 text-sm mb-3">Corporate Office</p>
                <p className="text-blue-600 font-medium">Kochi, Kerala</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">ATM Franchise India</h3>
                  <p className="text-sm text-gray-400">Trusted Business Partner</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering rural entrepreneurs with transparent ATM franchise opportunities. 
                Building passive income streams while serving communities across India.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+91 9072380076</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">atmfranchise@pixellpay.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/submit-atm-location" className="text-gray-300 hover:text-white transition-colors">Submit ATM Location</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Become Franchise</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Agent</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Influencer</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li><span className="text-gray-300 text-sm">ATM Franchise Consultation</span></li>
                <li><span className="text-gray-300 text-sm">WLA Operator Comparison</span></li>
                <li><span className="text-gray-300 text-sm">Site Evaluation</span></li>
                <li><span className="text-gray-300 text-sm">Training & Support</span></li>
                <li><span className="text-gray-300 text-sm">Digital Marketing</span></li>
                <li><span className="text-gray-300 text-sm">Technical Assistance</span></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Accessibility Statement</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 ATM Franchise India. All rights reserved. | RBI Licensed Partners Only
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
