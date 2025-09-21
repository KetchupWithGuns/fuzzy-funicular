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
  X,
  ChevronRight,
  Home,
  Star,
  CheckCircle,
  Zap,
  Package,
  Heart
} from "lucide-react";

export default function OurProducts() {
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
                <a href="#" className="text-gray-700 font-medium">About Us</a>
                <ChevronDown className="w-4 h-4 text-gray-700" />
              </div>
              <Link to="/our-products" className="text-blue-600 font-medium">Our Products</Link>
              <Link to="/submit-atm-location" className="text-gray-700 font-medium hover:text-blue-600">Submit ATM Location</Link>
              <a href="#" className="text-gray-700 font-medium">Become Franchise</a>
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
                  className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md"
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

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50/30 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4 text-gray-500" />
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <span className="text-gray-900 font-medium">Our Products</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Premium Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <Star className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-white font-medium">Premium Business Solutions</span>
              <Package className="w-5 h-5 text-purple-400 ml-3" />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              ATM Business
            </h1>
            <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-8 tracking-tight">
              Products
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your entrepreneurial dreams into reality with our comprehensive
              ATM franchise solutions. Experience the perfect blend of technology, support,
              and profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                <Target className="w-5 h-5 mr-2" />
                Explore Solutions
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Become Franchise
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-blue-200">WLA Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">���30K</div>
                <div className="text-purple-200">Care360 Value</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">₹3K</div>
                <div className="text-blue-200">Visibility Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WLA ATMs Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-600 mb-6">
                <Award className="w-4 h-4 mr-2" />
                Premium Partnership Network
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WLA ATMs</span>
                <br />
                <span className="text-gray-800">Partnership</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access India's most trusted White Label ATM operators through
                our exclusive partnership network. Choose from multiple
                operators based on your location and investment preferences.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">12-18</div>
                    <div className="text-gray-600">Months ROI</div>
                  </CardContent>
                </Card>
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">₹15K+</div>
                    <div className="text-gray-600">Monthly Income</div>
                  </CardContent>
                </Card>
              </div>

              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3">
                <Target className="w-4 h-4 mr-2" />
                Start Your Franchise
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Trusted WLA Partners</h3>
              <div className="grid grid-cols-2 gap-6">
                {/* Partner Cards */}
                <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                      <Building className="w-8 h-8 text-gray-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Vakrangee</h4>
                    <p className="text-sm text-gray-600">Market Leader</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                      <TrendingUp className="w-8 h-8 text-gray-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Findi</h4>
                    <p className="text-sm text-gray-600">Fast Growing</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                      <Shield className="w-8 h-8 text-gray-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">India One</h4>
                    <p className="text-sm text-gray-600">Reliable Network</p>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-200 shadow-sm">
                      <Award className="w-8 h-8 text-gray-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">EPS Bancs</h4>
                    <p className="text-sm text-gray-600">Proven Track Record</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATM Care360 Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        {/* Floating decorative dots */}
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-purple-300 rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-yellow-400/30 bg-yellow-400/20 backdrop-blur-md mb-8">
              <Shield className="w-5 h-5 text-yellow-400 mr-3" />
              <span className="text-white font-medium">⭐ PREMIUM FRANCHISE SUPPORT ⭐</span>
              <Star className="w-5 h-5 text-yellow-400 ml-3" />
            </div>

            <h2 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent mb-8">
              ATM Care360
            </h2>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              🚀 The ultimate support system that transforms ATM franchise ownership from stressful to
              profitable with our comprehensive 360° coverage. Join 500+ successful franchise partners! 🎯
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-white">Support</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-white">Partners</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-white">Success Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Card */}
            <Card className="bg-gradient-to-br from-yellow-400 to-yellow-500 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                  <Package className="w-10 h-10 text-gray-900" />
                </div>
                <div className="text-6xl font-bold text-gray-900 mb-4">₹30,000</div>
                <div className="text-xl font-semibold text-gray-800 mb-4">One-Time Investment</div>
                <div className="text-gray-700 mb-6">🎯 No hidden fees • Full support • Maximum ROI</div>
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 py-3">
                  🚀 Get Care360 Now
                </Button>
              </CardContent>
            </Card>

            {/* Features List */}
            <Card className="bg-white/95 backdrop-blur-md border border-white/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-900">What's Included in Care360:</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">🎯 Google GMB Profile & Location Boosting</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">⚖️ Settlement Dispute Resolution</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">💰 Payout Delay & Discrepancy Handling</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">🔧 ATM & Asset Troubleshooting</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">️ Insurance Claim Filing & Follow-up</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">📊 194N TDS Tagging & Tax Compliance</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">⚡ Fast-Response Support Team</span>
                  </div>
                  <div className="flex items-center p-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">🏦 Assistance with Settlement Account Opening</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="mt-16 bg-white/95 backdrop-blur-md border border-white/30 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-800 italic mb-6 leading-relaxed">
                "Care360 gave me complete peace of mind. When an insurance claim came up,
                their team handled it end-to-end while I focused on my shop. Best investment I
                made! 🎯"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  S
                </div>
                <span className="text-gray-900 font-bold">– Suresh, Franchise Partner, Vizag</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ATM Visibility Boost Section */}
      <section className="py-20 bg-gray-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 right-20 w-28 h-28 bg-blue-100/50 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Product Info */}
            <div>
              <Badge className="bg-blue-100 text-blue-600 mb-6">
                <MapPin className="w-4 h-4 mr-2" />
                Digital Visibility Solution
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">ATM Visibility</span>
                <br />
                <span className="text-gray-800">Boost</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your ATM into the most discoverable location in your
                area. We put your ATM on the digital map—literally!
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Google My Business Creation & Verification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Professional Business Profile Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Maps & Search Tagging for High Visibility</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Local SEO Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Monthly Performance Insights</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-gray-900">Why You Need This</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>📍 Appear on Google Maps searches</div>
                  <div>📈 Increase daily transaction volume</div>
                  <div>🎯 Build digital presence & trust</div>
                  <div>💼 Works for all location types</div>
                </div>
              </div>
            </div>

            {/* Right side - Pricing & CTA */}
            <div className="space-y-8">
              <Card className="border border-gray-200 bg-white shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">₹3,000</div>
                  <div className="text-gray-600 mb-4">One-Time Investment</div>
                  <div className="text-sm text-gray-600 mb-6">Complete setup + 3 months support</div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-lg font-bold text-gray-900">30%</div>
                      <div className="text-xs text-gray-600">Transaction Increase</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-lg font-bold text-gray-900">24/7</div>
                      <div className="text-xs text-gray-600">Visibility</div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3">
                    <Zap className="w-4 h-4 mr-2" />
                    Boost Visibility Now
                  </Button>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-gray-600 italic mb-4">
                    "After using ATM Visibility Boost, my ATM started showing on Google Maps. My
                    transaction count went up 30%!"
                  </blockquote>
                  <div className="font-medium text-gray-900">– Ravi, Franchisee, Coimbatore</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Get started with our premium products and join thousands of successful franchise partners
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Call Us</h4>
                <p className="text-blue-200">9072380076</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Website</h4>
                <p className="text-blue-200">atmfranchiseindia.in</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-blue-200">atmfranchise@pixellpay.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Users className="w-5 h-5 mr-2" />
              Contact Our Experts
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
              <Star className="w-5 h-5 mr-2" />
              Start Your Franchise
            </Button>
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
