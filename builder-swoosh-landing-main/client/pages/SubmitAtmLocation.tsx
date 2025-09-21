import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Building,
  MapPin,
  Home,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Globe,
  Search,
  Star,
  Shield,
  Users,
  CheckCircle,
  Phone,
  Mail,
  Camera,
  Upload,
  RotateCcw,
  Target,
  TrendingUp,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function SubmitAtmLocation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Agent Assistance
    agentAssisted: "no",

    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",

    // Location Information
    state: "",
    city: "",
    district: "",
    pincode: "",
    completeAddress: "",
    locationName: "",
    googleMapsLink: "",

    // Photos (base64)
    buildingPhoto: "",
    roomPhoto: "",

    // Additional Information
    additionalNotes: "",

    // Security Verification
    captchaAnswer: ""
  });

  const [buildingPreview, setBuildingPreview] = useState<string | null>(null);
  const [roomPreview, setRoomPreview] = useState<string | null>(null);

  const buildingInputRef = useRef<HTMLInputElement | null>(null);
  const roomInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // helper to keep only digits
  const onlyDigits = (value: string, maxLength?: number) => {
    const digits = value.replace(/\D/g, '');
    return typeof maxLength === 'number' ? digits.slice(0, maxLength) : digits;
  };

  const fileToBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(String(reader.result));
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });

  const calculateProgress = () => {
    // require phone length 10 and pincode length 6 and captcha == '6'
    const required = [
      'fullName', 'email', 'state', 'city', 'completeAddress', 'locationName'
    ];
    let filled = 0;
    for (const key of required) {
      const v = (formData as any)[key];
      if (v && String(v).trim() !== '') filled++;
    }
    // phone & pincode stricter
    if ((formData.phone || '').length >= 10) filled++;
    if ((formData.pincode || '').length >= 6) filled++;
    // captcha
    if (String(formData.captchaAnswer).trim() === '6') filled++;

    // total target fields = required.length + 3 (phone,pincode,captcha)
    const total = required.length + 3;
    return Math.round((filled / total) * 100);
  };

  const progress = calculateProgress();

  // file input refs and handlers will be attached later in JSX
  const handleBuildingFile = async (file?: File) => {
    if (!file) return;
    const b64 = await fileToBase64(file);
    setBuildingPreview(b64);
    handleInputChange('buildingPhoto', b64);
  };

  const handleRoomFile = async (file?: File) => {
    if (!file) return;
    const b64 = await fileToBase64(file);
    setRoomPreview(b64);
    handleInputChange('roomPhoto', b64);
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    // final validation
    if (progress !== 100) {
      alert('Please complete all required fields and verification before submitting.');
      return;
    }

    try {
      const res = await fetch('/api/submit-location', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res.json();
        alert(err?.message || 'Submission failed');
        return;
      }
      const data = await res.json();
      alert('Submission received. ID: ' + data.id);
      // reset (simple)
      setFormData({
        agentAssisted: 'no', fullName: '', email: '', phone: '', whatsapp: '', state: '', city: '', district: '', pincode: '', completeAddress: '', locationName: '', googleMapsLink: '', buildingPhoto: '', roomPhoto: '', additionalNotes: '', captchaAnswer: ''
      });
      setBuildingPreview(null);
      setRoomPreview(null);
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };


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
              <Link to="/submit-atm-location" className="text-blue-600 font-medium">Submit ATM Location</Link>
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
                  className="block px-3 py-2 text-base font-medium text-blue-600 bg-blue-50 rounded-md"
                >
                  Submit ATM Location
                </Link>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  Become Franchise
                </a>

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
            <span className="text-gray-900 font-medium">Submit Location</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
              <Target className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-white font-medium">Professional Location Analysis</span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Get Your
            </h1>
            <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 leading-tight">
              ATM Location
            </h2>
            <h3 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Analyzed by Experts
            </h3>

            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Submit your location details and receive a comprehensive analysis report
              within 24 hours. Our experts evaluate <span className="font-bold text-cyan-300">foot traffic</span>,
              <span className="font-bold text-purple-300"> demographics</span>, and
              <span className="font-bold text-blue-300"> profitability potential</span>.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold mb-8"
              onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Submit Location for Analysis
              <Zap className="w-5 h-5 ml-2" />
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-blue-200">Locations Analyzed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24hrs</div>
                  <div className="text-blue-200">Analysis Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-blue-200">Success Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Data-Driven Analysis */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional evaluation using real market data, advanced analytics, and comprehensive
                demographics research
              </p>
            </div>

            {/* Location Scoring */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location Scoring</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive scoring system based on foot traffic patterns, accessibility metrics, and
                strategic positioning
              </p>
            </div>

            {/* Expert Recommendations */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                Actionable insights from industry experts with 5+ years experience and proven track record
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Location Analysis Matters */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Location Analysis
            </h2>
            <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Matters
            </h3>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
              The success of your ATM business depends heavily on location. Our expert
              analysis helps you make informed decisions and maximize your ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Success Rate with Analysis */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                  <div className="text-4xl font-bold text-white">85%</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Success Rate with Analysis</h3>
              <p className="text-blue-200 leading-relaxed">
                Locations analyzed by our experts show 85% higher success rates compared to random
                selections
              </p>
            </div>

            {/* Average Monthly Revenue */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                  <div className="text-2xl font-bold text-white">₹50K</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Average Monthly Revenue</h3>
              <p className="text-blue-200 leading-relaxed">
                Well-analyzed locations generate an average of ₹50,000+ monthly revenue with consistent
                growth
              </p>
            </div>

            {/* ROI Timeline */}
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                  <div className="text-4xl font-bold text-white">12M</div>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">ROI Timeline</h3>
              <p className="text-blue-200 leading-relaxed">
                Recover your investment within 12-15 months with the right location and proper strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Submit Your ATM Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Share your location details and become part of India's largest ATM network
            </p>
          </div>

          {/* Progress Indicator */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-bold text-gray-900">Form Progress</h3>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">{Math.floor(progress / 10)} of 10 fields completed</span>
                <span className="text-blue-600 font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          {/* Main Form */}
          <Card className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-8">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Location Details Form</h3>
              </div>

              <form className="space-y-8" onSubmit={submitForm}>
                {/* Agent Assistance */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Agent Assistance</h4>
                  <Label className="text-sm font-medium text-gray-900 mb-3 block">
                    Were you assisted by one of our agents? *
                  </Label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="agent-yes"
                        name="agentAssisted"
                        value="yes"
                        checked={formData.agentAssisted === "yes"}
                        onChange={(e) => handleInputChange("agentAssisted", e.target.value)}
                        className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                      />
                      <Label htmlFor="agent-yes" className="ml-2 text-sm text-gray-900">
                        Yes, I was assisted by an agent
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="agent-no"
                        name="agentAssisted"
                        value="no"
                        checked={formData.agentAssisted === "no"}
                        onChange={(e) => handleInputChange("agentAssisted", e.target.value)}
                        className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500"
                      />
                      <Label htmlFor="agent-no" className="ml-2 text-sm text-gray-900">
                        No, I found this independently
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium text-gray-900">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Your complete name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-900">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-900">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        placeholder="Your 10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", onlyDigits(e.target.value, 10))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-900">
                        WhatsApp Number
                      </Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        placeholder="WhatsApp number (if different from phone)"
                        value={formData.whatsapp}
                        onChange={(e) => handleInputChange("whatsapp", onlyDigits(e.target.value, 10))}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Location Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="state" className="text-sm font-medium text-gray-900">
                        State *
                      </Label>
                      <select
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select your state</option>
                        <option value="andhra-pradesh">Andhra Pradesh</option>
                        <option value="arunachal-pradesh">Arunachal Pradesh</option>
                        <option value="assam">Assam</option>
                        <option value="bihar">Bihar</option>
                        <option value="chhattisgarh">Chhattisgarh</option>
                        <option value="goa">Goa</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="haryana">Haryana</option>
                        <option value="himachal-pradesh">Himachal Pradesh</option>
                        <option value="jharkhand">Jharkhand</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="kerala">Kerala</option>
                        <option value="madhya-pradesh">Madhya Pradesh</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="manipur">Manipur</option>
                        <option value="meghalaya">Meghalaya</option>
                        <option value="mizoram">Mizoram</option>
                        <option value="nagaland">Nagaland</option>
                        <option value="odisha">Odisha</option>
                        <option value="punjab">Punjab</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="sikkim">Sikkim</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="telangana">Telangana</option>
                        <option value="tripura">Tripura</option>
                        <option value="uttar-pradesh">Uttar Pradesh</option>
                        <option value="uttarakhand">Uttarakhand</option>
                        <option value="west-bengal">West Bengal</option>
                        <option value="delhi">Delhi</option>
                        <option value="jammu-kashmir">Jammu & Kashmir</option>
                        <option value="ladakh">Ladakh</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="city" className="text-sm font-medium text-gray-900">
                        City *
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="Your city name"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="district" className="text-sm font-medium text-gray-900">
                        District
                      </Label>
                      <Input
                        id="district"
                        type="text"
                        placeholder="District name"
                        value={formData.district}
                        onChange={(e) => handleInputChange("district", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode" className="text-sm font-medium text-gray-900">
                        Pincode *
                      </Label>
                      <Input
                        id="pincode"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={6}
                        placeholder="6-digit pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange("pincode", onlyDigits(e.target.value, 6))}
                        className="mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="completeAddress" className="text-sm font-medium text-gray-900">
                        Complete Address *
                      </Label>
                      <Textarea
                        id="completeAddress"
                        placeholder="Complete address with landmarks"
                        value={formData.completeAddress}
                        onChange={(e) => handleInputChange("completeAddress", e.target.value)}
                        className="mt-2 min-h-[80px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="locationName" className="text-sm font-medium text-gray-900">
                        Location Name *
                      </Label>
                      <Input
                        id="locationName"
                        type="text"
                        placeholder="What do you call this location?"
                        value={formData.locationName}
                        onChange={(e) => handleInputChange("locationName", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="googleMapsLink" className="text-sm font-medium text-gray-900">
                        Google Maps Link
                      </Label>
                      <Input
                        id="googleMapsLink"
                        type="url"
                        placeholder="https://maps.google.com/..."
                        value={formData.googleMapsLink}
                        onChange={(e) => handleInputChange("googleMapsLink", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Location Photos */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Location Photos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Building Photo */}
                    <Card className="border border-gray-200 shadow-sm">
                      <CardContent className="p-6">
                        <Label className="text-sm font-medium text-gray-900 block mb-2">
                          Building Photo <span className="text-red-500">*</span>
                        </Label>
                        <p className="text-xs text-gray-500 mb-4">
                          Upload a clear photo of the building exterior (Maximum size: 20MB)
                        </p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                          <input
                            ref={buildingInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) await handleBuildingFile(file);
                            }}
                          />
                          <div className="flex gap-2 justify-center mb-4">
                            <Button type="button" variant="outline" size="sm" onClick={() => buildingInputRef.current?.click()}>
                              Choose File
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => buildingInputRef.current?.click()}>
                              <Camera className="w-4 h-4 mr-2" />
                              Take Photo
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500">Click to select a file or take a photo</p>
                          {buildingPreview && (
                            <img src={buildingPreview} alt="building preview" className="mt-4 mx-auto max-h-40 object-contain" />
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Room/Space Photo */}
                    <Card className="border border-gray-200 shadow-sm">
                      <CardContent className="p-6">
                        <Label className="text-sm font-medium text-gray-900 block mb-2">
                          Room/Space Photo <span className="text-red-500">*</span>
                        </Label>
                        <p className="text-xs text-gray-500 mb-4">
                          Upload a photo of the interior space for ATM (Maximum size: 20MB)
                        </p>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                          <input
                            ref={roomInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) await handleRoomFile(file);
                            }}
                          />
                          <div className="flex gap-2 justify-center mb-4">
                            <Button type="button" variant="outline" size="sm" onClick={() => roomInputRef.current?.click()}>
                              Choose File
                            </Button>
                            <Button type="button" variant="outline" size="sm" onClick={() => roomInputRef.current?.click()}>
                              <Camera className="w-4 h-4 mr-2" />
                              Take Photo
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500">Click to select a file or take a photo</p>
                          {roomPreview && (
                            <img src={roomPreview} alt="room preview" className="mt-4 mx-auto max-h-40 object-contain" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Additional Information</h4>
                  <div>
                    <Label htmlFor="additionalNotes" className="text-sm font-medium text-gray-900">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="additionalNotes"
                      placeholder="Any additional information about the location, foot traffic, accessibility, etc."
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                      className="mt-2 min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Security Verification */}
                <Card className="bg-gray-50/30 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Label className="text-sm font-medium text-gray-900 block mb-4">
                          Security Verification *
                        </Label>
                        <div className="flex items-center gap-3">
                          <div className="bg-white border border-gray-300 rounded px-4 py-2 text-center min-w-[80px]">
                            <span className="text-lg font-medium text-gray-900">3 × 2 = ?</span>
                          </div>
                          <Input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={2}
                            placeholder="Answer"
                            value={formData.captchaAnswer}
                            onChange={(e) => handleInputChange("captchaAnswer", onlyDigits(e.target.value, 2))}
                            className="w-20"
                          />
                          <Button type="button" variant="outline" size="sm" onClick={() => handleInputChange('captchaAnswer', '')}>
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {String(formData.captchaAnswer).trim() === '6' ? (
                          <span className="text-green-600 font-medium">Verified</span>
                        ) : (
                          <span>Not verified</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className={`w-full py-4 text-lg font-semibold ${
                    progress === 100 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-400 text-gray-300 cursor-not-allowed'
                  }`}
                  disabled={progress !== 100}
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Submit Location Details
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Secure & Confidential</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Expert Team Review</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Quick Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-md border border-white/30 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-800 italic mb-8 leading-relaxed">
                "Amazing service! They helped me find the perfect ATM location and the
                analysis was spot-on. The detailed report gave me confidence to invest and the
                results have exceeded expectations."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  RK
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Rajesh Kumar</div>
                  <div className="text-gray-600">Successful ATM Operator</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-white/60 backdrop-blur-md border border-white/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Call Us Now</p>
                    <p className="text-xl font-bold text-gray-900">+91 9072380076</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-md border border-white/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Email Us</p>
                    <p className="text-xl font-bold text-gray-900">atmfranchise@pixellpay.com</p>
                  </div>
                </div>
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
