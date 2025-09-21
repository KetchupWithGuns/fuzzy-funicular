import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Shield,
  Users,
  Headphones,
  Home,
  ChevronRight,
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
  Building,
  Star,
  DollarSign,
  Target
} from "lucide-react";

export default function BecomeFranchise() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <a href="#" className="text-blue-600 font-medium">Become Franchise</a>
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
              <Link to="/join-us">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Join Us
                </Button>
              </Link>
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
                  className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md"
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
                  <Link to="/join-us">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Join Us
                    </Button>
                  </Link>
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
            <span className="text-gray-900 font-medium">Become Franchise</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-72 left-96 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-72 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ce70ffbfb1ccfdf8437191c2d079f20814ca9b37?width=3840"
            alt="ATM Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-indigo-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <Star className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-white/90 font-medium">Trusted ATM Franchise Partner</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black text-white leading-none">
                  Become an
                </h1>
                <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-none">
                  ATM Franchise
                </h1>
                <h1 className="text-6xl lg:text-7xl font-black text-white leading-none">
                  Partner
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Join <span className="text-blue-400 font-bold">200+ successful partners</span> and start your{' '}
                <span className="text-blue-400 font-bold">profitable ATM business</span> today with{' '}
                <span className="font-bold">minimal investment</span>.
              </p>

              {/* Apply Button */}
              <div className="pt-8">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-lg">
                  Apply Now
                </Button>
              </div>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">Quick ROI</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Fast return on investment with proven business model
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">Dedicated Support</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      24/7 technical and business support from our expert team
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">Proven Network</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Join 500+ successful franchise partners across India
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2">Training Included</h3>
                    <p className="text-white/70 text-xs leading-relaxed">
                      Comprehensive training and ongoing support provided
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Process Steps */}
            <div>
              <Card className="border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white text-center mb-8">
                    Simple 4-Step Process
                  </h2>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Apply</h3>
                        <p className="text-white/70">Submit your franchise application online</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Agreement</h3>
                        <p className="text-white/70">Complete documentation and sign agreement</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Installation</h3>
                        <p className="text-white/70">We handle ATM setup and installation</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-2">Start Earning</h3>
                        <p className="text-white/70">Begin receiving monthly passive income</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why ATM Business Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-72 left-96 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-72 right-80 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
              Why ATM Business
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">?</span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-200 max-w-4xl mx-auto opacity-90">
              Zero Loss and Fully Transparent Business Opportunity from RBI Licensed Companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* ROI Card */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-white/5 shadow-2xl">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-blue-200 text-sm">upto</span>
              </div>
              <div className="text-5xl font-black text-white mb-4">50%</div>
              <h3 className="text-xl font-bold text-white mb-4">Return On Investment</h3>
              <p className="text-blue-200 text-sm opacity-90">
                All Payout Received by RBI Licensed WLA ATM Partners
              </p>
            </div>

            {/* Penetration Card */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-white/5 shadow-2xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-2">15</div>
              <div className="text-lg text-blue-300 font-medium mb-4">Per Lac</div>
              <h3 className="text-xl font-bold text-white mb-4">Only 15 ATMs per 1Lac People</h3>
              <p className="text-blue-200 text-sm opacity-90">
                ATM Penetration in India is very Low
              </p>
            </div>

            {/* Cash Circulation Card */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-white/5 shadow-2xl">
                <DollarSign className="w-12 h-12 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-2">75%</div>
              <div className="text-lg text-blue-300 font-medium mb-4">Cash</div>
              <h3 className="text-xl font-bold text-white mb-4">Cash Circulation</h3>
              <p className="text-blue-200 text-sm opacity-90">
                Indian Economy is still Largely Cash based
              </p>
            </div>

            {/* Market Potential Card */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center rounded-3xl bg-white/5 shadow-2xl">
                <Target className="w-12 h-12 text-white" />
              </div>
              <div className="text-5xl font-black text-white mb-2">90%</div>
              <div className="text-lg text-blue-300 font-medium mb-4">Potential</div>
              <h3 className="text-xl font-bold text-white mb-4">90% of Banks Offsite ATMs are closing down</h3>
              <p className="text-blue-200 text-sm opacity-90">
                Banks Offsite ATM Closure creates a Large market for ATMs
              </p>
            </div>
          </div>

          {/* Perfect Time Banner */}
          <div className="text-center">
            <Card className="inline-block border border-white/20 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md shadow-2xl">
              <CardContent className="px-12 py-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                  Perfect Time for ATM Business in Rural India
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                    • Digital Adoption Growing
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                    • Government Push for Financial Inclusion
                  </Badge>
                  <Badge className="bg-white/20 text-white border-0 px-4 py-2">
                    • Bank Branch Closures
                  </Badge>
                </div>
                <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Investment Range: ₹2-5 Lakhs
                </p>
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
                  <div className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+91 9072380076</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">atmfranchise@pixellpay.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-400" />
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
