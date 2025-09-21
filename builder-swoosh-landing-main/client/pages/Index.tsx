import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Users,
  Award,
  Clock,
  TrendingUp,
  DollarSign,
  Building,
  Target,
  Phone,
  Mail,
  MapPin,
  Search,
  Globe,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

export default function Index() {
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
              <Link to="/" className="text-blue-600 font-medium hover:text-blue-700">Home</Link>
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
                  className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md"
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

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2127&q=80"
            alt="ATM machine in Indian setting"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/80"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Your ATM – Your Income
          </h1>
          <p className="text-lg lg:text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Start your own ATM franchise business with minimal investment and maximum returns.
            Partner with RBI licensed operators across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/submit-atm-location">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base">
                Submit ATM Location
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-3 text-base">
              Become Franchise
            </Button>
          </div>
        </div>
      </section>

      {/* Why ATM Business Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why ATM Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto opacity-90">
              Zero Loss and Fully Transparent Business Opportunity from RBI Licensed Companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* ROI Card */}
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border border-white/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-2 tracking-tight">upto 50%</h3>
                <h4 className="text-xl font-bold mb-3">Return On Investment</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  All Payout Received by RBI Licensed WLA ATM Partners
                </p>
                <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mt-6"></div>
              </CardContent>
            </Card>

            {/* Penetration Card */}
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 border border-white/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-2 tracking-tight">15 Per Lac</h3>
                <h4 className="text-xl font-bold mb-3">ATM Penetration</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Only 15 ATMs per 1 Lac People - ATM Penetration in India is very Low
                </p>
                <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mt-6"></div>
              </CardContent>
            </Card>

            {/* Cash Circulation Card */}
            <Card className="bg-gradient-to-br from-orange-500 to-red-600 border border-white/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-2 tracking-tight">75% Cash</h3>
                <h4 className="text-xl font-bold mb-3">Cash Circulation</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Indian Economy is still Largely Cash based
                </p>
                <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mt-6"></div>
              </CardContent>
            </Card>

            {/* Market Potential Card */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-600 border border-white/20 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8 text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-4xl font-black mb-2 tracking-tight">90% Potential</h3>
                <h4 className="text-xl font-bold mb-3">Market Opportunity</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  90% of Banks Offsite ATMs are closing down - Banks Offsite ATM Closure creates a Large market for ATMs
                </p>
                <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mt-6"></div>
              </CardContent>
            </Card>
          </div>

          {/* Perfect Time Banner */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Perfect Time for ATM Business in Rural India
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                • Digital Adoption Growing
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                • Government Push for Financial Inclusion
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                • Bank Branch Closures
              </Badge>
            </div>
            <p className="text-yellow-300 text-lg font-semibold">
              Investment Range: ₹2-5 Lakhs
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Nationwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful partners who trust us with their ATM business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600">Active Partners</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">99.9%</h3>
              <p className="text-gray-600">Uptime Guarantee</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">5+ Years</h3>
              <p className="text-gray-600">Industry Experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ATM Franchise India Section */}
      <section className="py-20 bg-gray-50/30 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-100/50 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50/50 to-gray-50/50 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-600 mb-6">Our Advantage</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">ATM Franchise India?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our comprehensive support system and industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Feature Cards */}
            <Card className="border border-blue-200/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Trusted ATM Franchise Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Gain accurate and verified insights into the ATM industry. As a regulated sector, 
                  the ATM business often sees widespread misinformation. Our representatives ensure 
                  you receive reliable, fact-based guidance to make informed franchise decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-green-200/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expert Guidance on WLA Operators
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Let us help you choose the right White Label ATM partner. Many operators exaggerate 
                  their offerings and mislead investors. We provide unbiased comparisons of all major 
                  WLA operators—highlighting their strengths and weaknesses—to ensure you find the perfect fit.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-purple-200/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Boost Your Digital Presence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Already running an ATM franchise? Register with us to increase your digital reach 
                  and enhance your online branding. Connect with more customers and grow your visibility 
                  in the market.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-orange-200/50 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  End-to-End Franchise Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With 4+ years of experience across all WLA brands, we handle everything: Franchise 
                  onboarding, Training & operational setup, Local promotions & brand visibility, 
                  Technical support & troubleshooting, Bank account settlements, Dispute resolution 
                  with WLA operators. We're your one-stop solution for ATM business success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Success Partners Badge */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-blue-200/50 shadow-lg rounded-full px-8 py-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-gray-900 font-medium">
                Join 500+ successful franchise partners
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 200+ ATMs Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-16">
            <div className="hidden lg:block">
              <div className="w-60 h-60 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Building className="w-32 h-32 text-white/80" />
              </div>
            </div>
            <div className="text-center lg:text-left text-white">
              <h2 className="text-6xl lg:text-8xl font-black mb-4 tracking-tight">
                200<span className="text-blue-300">+</span>
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 opacity-95">
                ATMs across India
              </h3>
              <p className="text-xl opacity-85">
                and counting...
              </p>
            </div>
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
