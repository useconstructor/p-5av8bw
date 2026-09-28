'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Calendar,
  Shield,
  Zap,
  Briefcase,
  Clock,
  Bell,
  Users,
  Globe,
  Code,
  CheckCircle,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Dumbbell,
  Scissors,
  Stethoscope,
  Star,
  ArrowRight,
  Play,
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        }
      )

      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  const stats = [
    { icon: Calendar, value: '450K+', label: 'Bookings Monthly' },
    { icon: Shield, value: '98.7%', label: 'Uptime SLA' },
    { icon: Zap, value: '3.2x', label: 'Faster Scheduling' },
    { icon: Briefcase, value: '12,000+', label: 'Active Businesses' },
    { icon: Clock, value: '2 min', label: 'Setup Time' },
  ]

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'AI powered availability suggestions and automatic conflict detection for seamless booking management.',
      size: 'large',
    },
    {
      icon: Bell,
      title: 'Customer Reminders',
      description: 'SMS and email reminders reduce no shows by 48%. Optional pre visit questionnaires.',
      size: 'medium',
    },
    {
      icon: Users,
      title: 'Multi Location Management',
      description: 'Manage unlimited staff, rooms, and locations from one dashboard.',
      size: 'medium',
    },
    {
      icon: Globe,
      title: 'Calendar Sync',
      description: 'Seamless Google and Outlook integration.',
      size: 'small',
    },
    {
      icon: Code,
      title: 'Embeddable Widget',
      description: 'Add booking to any website.',
      size: 'small',
    },
  ]

  const processSteps = [
    { step: 1, title: 'Customize', description: 'Set up your logo, business hours, and services in minutes.' },
    { step: 2, title: 'Share', description: 'Embed the widget on your site or share your booking link directly.' },
    { step: 3, title: 'Receive', description: 'Bookings flow to your dashboard with automatic customer emails.' },
    { step: 4, title: 'Manage', description: 'Reschedule, send reminders, and collect payments all in one place.' },
  ]

  const useCases = [
    {
      icon: Scissors,
      title: 'Salons & Spas',
      features: ['Hair, nails, massage scheduling', 'Stylist availability profiles', 'Client history tracking'],
    },
    {
      icon: Stethoscope,
      title: 'Medical Clinics',
      features: ['Patient intake forms', 'Appointment confirmations', 'HIPAA compliant infrastructure'],
    },
    {
      icon: Dumbbell,
      title: 'Fitness Studios',
      features: ['Class scheduling', 'Membership verification', 'Waitlist management'],
    },
  ]

  const testimonials = [
    {
      quote: 'ReserveHub cut our admin time by 60%. We went from a paper calendar to fully automated booking. Game changer.',
      name: 'Maria C.',
      role: 'Salon Owner',
      location: 'Los Angeles',
      initials: 'MC',
    },
    {
      quote: 'Our no show rate dropped from 22% to 9% overnight. The reminder system is genuinely magic.',
      name: 'Dr. James P.',
      role: 'Wellness Clinic Director',
      location: 'Austin',
      initials: 'JP',
    },
    {
      quote: 'Setup took 20 minutes. We have been live for six months with zero support requests. That is the mark of great software.',
      name: 'Sofia R.',
      role: 'Studio Founder',
      location: 'Milan',
      initials: 'SR',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for solo practitioners',
      features: [
        'Up to 500 bookings/month',
        '1 staff member',
        'Email reminders',
        'Basic integrations',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$149',
      period: '/month',
      description: 'For growing teams',
      features: [
        'Up to 5,000 bookings/month',
        'Unlimited staff',
        'SMS + Email reminders',
        'Calendar sync',
        'Priority support',
        'Custom branding',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited bookings',
        'Advanced reporting',
        'API access',
        'Payment processing',
        'Dedicated account manager',
        'White label option',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Most businesses are up and running in under 20 minutes. Our guided onboarding walks you through adding your services, setting availability, and customizing your booking page.',
    },
    {
      question: 'Can I try it before committing?',
      answer: 'Yes, all plans include a 14 day free trial with no credit card required. You get full access to all features during the trial period.',
    },
    {
      question: 'Do you integrate with my existing calendar?',
      answer: 'We sync seamlessly with Google Calendar and Outlook. Any booking made through ReserveHub automatically appears in your calendar, and we check your availability in real time.',
    },
    {
      question: 'How do the automated reminders work?',
      answer: 'You can configure SMS and email reminders at any interval before appointments. Most businesses use 24 hour and 1 hour reminders. Customers can confirm or reschedule directly from the reminder.',
    },
    {
      question: 'Is my customer data secure?',
      answer: 'Absolutely. We use bank level encryption, are SOC 2 Type II certified, and offer HIPAA compliant plans for healthcare providers. Your data is never sold or shared.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#14B8A6] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#F1F5F9]">ReserveHub</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#94A3B8] hover:text-[#14B8A6] transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="text-[#94A3B8]" asChild>
                <a href="#cta">Log In</a>
              </Button>
              <Button className="bg-[#14B8A6] hover:bg-[#0D9488] text-white" asChild>
                <a href="#cta">Start Free Trial</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#F1F5F9]" />
              ) : (
                <Menu className="w-6 h-6 text-[#F1F5F9]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#1E293B] border-b border-[#334155] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#94A3B8] hover:text-[#14B8A6] transition-all duration-300 font-medium py-2"
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            <div
              className="pt-4 space-y-2 transition-all duration-300"
              style={{ transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : '0ms' }}
            >
              <Button variant="outline" className="w-full" asChild>
                <a href="#cta">Log In</a>
              </Button>
              <Button className="w-full bg-[#14B8A6] hover:bg-[#0D9488] text-white" asChild>
                <a href="#cta">Start Free Trial</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20 border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                Trusted by 12,000+ businesses
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F1F5F9] leading-tight">
                Your Reservation System That{' '}
                <span className="text-[#14B8A6]">Actually Works</span>
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed max-w-lg">
                Reduce no shows by half. Accept bookings around the clock. Sync everything automatically. The booking platform built for modern service businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-[#14B8A6] hover:bg-[#0D9488] text-white text-lg px-8 py-6"
                  asChild
                >
                  <a href="#cta">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#94A3B8] text-[#F1F5F9] hover:bg-[#0B1120] hover:text-white text-lg px-8 py-6"
                  asChild
                >
                  <a href="#process">
                    <Play className="w-5 h-5 mr-2" />
                    Watch 2 min Demo
                  </a>
                </Button>
              </div>
              <p className="text-sm text-[#94A3B8]">
                14 day free trial • No credit card required
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/20 to-[#14B8A6]/5 rounded-3xl blur-3xl" />
              <div className="relative bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden border border-[#334155]">
                <Image
                  src="/images/hero.png"
                  alt="ReserveHub booking dashboard interface"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-[#1E293B] border-y border-[#334155]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#14B8A6] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#14B8A6]">{stat.value}</div>
                <div className="text-sm text-[#94A3B8] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20 border-0 mb-4">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
              Everything You Need to{' '}
              <span className="text-[#14B8A6]">Fill Your Calendar</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              Powerful tools designed for service businesses, from single practitioners to multi location enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Large Feature Card */}
            <Card className="md:col-span-2 md:row-span-2 bg-[#1E293B] border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center mb-6">
                    <Calendar className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9] mb-3">{features[0].title}</h3>
                  <p className="text-[#94A3B8] leading-relaxed">{features[0].description}</p>
                </div>
                <div className="px-8 pb-8">
                  <Image
                    src="/images/feature.png"
                    alt="Smart scheduling feature"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medium Feature Cards */}
            {features.slice(1, 3).map((feature) => (
              <Card key={feature.title} className="bg-[#1E293B] border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-[#14B8A6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F5F9] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#94A3B8]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Small Feature Cards */}
            {features.slice(3).map((feature) => (
              <Card key={feature.title} className="bg-[#1E293B] border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-[#14B8A6]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#F1F5F9] mb-1">{feature.title}</h3>
                      <p className="text-sm text-[#94A3B8]">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section id="process" className="py-20 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20 border-0 mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
              Go Live in <span className="text-[#14B8A6]">Four Simple Steps</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              No technical skills required. Most businesses are accepting bookings within 20 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#14B8A6] to-[#14B8A6]/20" />
                )}
                <div className="w-20 h-20 rounded-full bg-[#14B8A6] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 relative z-10">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{step.title}</h3>
                <p className="text-[#94A3B8]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases / Services */}
      <section className="py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#1E293B]/10 text-white hover:bg-[#1E293B]/20 border-0 mb-4">
              Use Cases
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Every <span className="text-[#14B8A6]">Service Business</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Whether you run a salon, clinic, or fitness studio, ReserveHub adapts to your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card
                key={useCase.title}
                className="bg-[#1E293B]/5 border-white/10 backdrop-blur hover:bg-[#1E293B]/10 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#14B8A6] flex items-center justify-center mb-6">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <ul className="space-y-3">
                    {useCase.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-white/80">
                        <CheckCircle className="w-5 h-5 text-[#14B8A6] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20 border-0 mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
              Loved by <span className="text-[#14B8A6]">Thousands of Businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-[#1E293B] border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#14B8A6] text-[#14B8A6]" />
                    ))}
                  </div>
                  <p className="text-[#F1F5F9] leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-[#F1F5F9]">{testimonial.name}</div>
                      <div className="text-sm text-[#94A3B8]">
                        {testimonial.role}, {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20 border-0 mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
              Simple, <span className="text-[#14B8A6]">Transparent Pricing</span>
            </h2>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
              No hidden fees. No contracts. Start free and upgrade when you are ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative border-2 transition-all hover:shadow-xl ${
                  tier.popular
                    ? 'border-[#14B8A6] shadow-lg scale-105'
                    : 'border-[#334155] hover:border-[#14B8A6]/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#14B8A6] text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl text-[#F1F5F9]">{tier.name}</CardTitle>
                  <p className="text-sm text-[#94A3B8]">{tier.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#F1F5F9]">{tier.price}</span>
                    <span className="text-[#94A3B8]">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-[#94A3B8]">
                        <CheckCircle className="w-5 h-5 text-[#14B8A6] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      tier.popular
                        ? 'bg-[#14B8A6] hover:bg-[#0D9488] text-white'
                        : 'bg-[#0B1120] hover:bg-[#0F172A] text-white'
                    }`}
                    asChild
                  >
                    <a href="#cta">{tier.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#14B8A6]/10 text-[#14B8A6] hover:bg-[#14B8A6]/20 border-0 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F1F5F9] mb-4">
              Frequently Asked <span className="text-[#14B8A6]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-[#1E293B] border-0 shadow-sm overflow-hidden cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 flex items-center justify-between text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="font-semibold text-[#F1F5F9] pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#14B8A6] shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-[#94A3B8] leading-relaxed">{faq.answer}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-[#14B8A6] to-[#0D9488]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to Fill Your Calendar?
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Join 12,000+ businesses who have transformed their scheduling. Start your free trial today and see results within the first week.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5" />
                  14 day free trial
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5" />
                  No credit card required
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5" />
                  Cancel anytime
                </li>
              </ul>
            </div>

            <Card className="bg-[#1E293B] border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#F1F5F9]">Start Your Free Trial</CardTitle>
                <p className="text-[#94A3B8]">Get started in under 2 minutes</p>
              </CardHeader>
              <CardContent>
                {formStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[#14B8A6]/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#14B8A6]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#F1F5F9] mb-2">Thanks for signing up!</h3>
                    <p className="text-[#94A3B8]">Check your email for next steps.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="border-[#334155] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Work email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="border-[#334155] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Company name"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="border-[#334155] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell us about your business (optional)"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        rows={3}
                        className="border-[#334155] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
                      />
                    </div>
                    {formStatus === 'error' && (
                      <p className="text-[#FF6B6B] text-sm">
                        Something went wrong. Please try again.
                      </p>
                    )}
                    <Button
                      type="submit"
                      className="w-full bg-[#14B8A6] hover:bg-[#0D9488] text-white text-lg py-6"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        'Starting trial...'
                      ) : (
                        <>
                          Start Free Trial
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#14B8A6] flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ReserveHub</span>
              </div>
              <p className="text-white/70">
                The booking platform built for modern service businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-white/70 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-white/70 hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} ReserveHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
