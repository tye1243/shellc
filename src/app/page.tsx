'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dumbbell, Users, Monitor, ClipboardList, Phone, Mail, MapPin, ChevronDown, Send } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: '1:1 Personal Training',
    description: 'Personalized, face-to-face training sessions tailored to your specific goals, fitness level, and schedule.',
  },
  {
    icon: Monitor,
    title: 'Online Coaching',
    description: 'Expert guidance and custom programming delivered remotely. Train on your schedule with full support.',
  },
  {
    icon: ClipboardList,
    title: 'Custom Programs',
    description: 'Structured training and nutrition plans built around your lifestyle, goals, and preferences.',
  },
  {
    icon: Dumbbell,
    title: 'Transformation Coaching',
    description: 'A holistic approach to changing your body and mindset. Accountability, strategy, and results.',
  },
]

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('New Consultation Request from TYE Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGoal: ${formData.goal}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:transformyourexistence@yahoo.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/5">
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/images/tye-logo.jpeg"
              alt="TYE Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <span className="text-gold font-serif text-lg tracking-wider hidden sm:block">TYE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-white/70 hover:text-gold transition-colors uppercase tracking-wider">About</a>
            <a href="#services" className="text-sm text-white/70 hover:text-gold transition-colors uppercase tracking-wider">Services</a>
            <a href="#contact" className="text-sm text-white/70 hover:text-gold transition-colors uppercase tracking-wider">Contact</a>
          </div>
          <a href="#contact" className="btn-primary text-xs py-3 px-6">Book Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-dark">
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2">
            <Image
              src="/images/trainer.jpeg"
              alt="Elite Personal Training"
              fill
              className="object-cover object-center opacity-40 md:opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="mb-8">
              <Image
                src="/images/tye-logo.jpeg"
                alt="TYE - Transform Your Existence"
                width={200}
                height={200}
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-2">
              <span className="gold-gradient">Transform.</span>
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-2">
              <span className="gold-gradient">Your.</span>
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8">
              <span className="gold-gradient">Existence.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Elite personal training and transformation coaching. Your journey to a stronger,
              healthier you starts with a single decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Book a Consultation
              </a>
              <a href="#services" className="btn-secondary">
                View Services
              </a>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={28} className="text-gold/60" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/trainer.jpeg"
                  alt="Personal Trainer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-gold/20" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/10 -z-10" />
            </div>
            <div>
              <p className="text-gold uppercase tracking-widest text-sm mb-4">About</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Elite Personal Training & Transformation Coaching
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  TYE is more than a training program. It is a commitment to total transformation --
                  body, mind, and lifestyle. Every session, every plan, and every conversation is
                  designed to push you beyond what you thought possible.
                </p>
                <p>
                  With a results-driven approach built on accountability, consistency, and expert
                  programming, TYE delivers the structure and support you need to achieve real,
                  lasting change.
                </p>
                <p>
                  Whether you are just starting your fitness journey or ready to break through a
                  plateau, you will get the personalized attention and expertise to reach your goals.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gold">1:1</p>
                  <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Personal Attention</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gold">100%</p>
                  <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Custom Plans</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-serif font-bold text-gold">24/7</p>
                  <p className="text-xs uppercase tracking-wider text-white/50 mt-1">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-widest text-sm mb-4">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-dark-light border border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <service.icon size={32} className="text-gold mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-20 bg-dark-light border-y border-white/5">
        <div className="container-custom text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic text-white/80 mb-4">
              &ldquo;Action is the foundational key to all success.&rdquo;
            </p>
            <cite className="text-gold text-sm uppercase tracking-widest not-italic">
              &mdash; Pablo Picasso
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Contact / Intake Form Section */}
      <section id="contact" className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-gold uppercase tracking-widest text-sm mb-4">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Book a Consultation
              </h2>
              <p className="text-white/70 leading-relaxed mb-10">
                Ready to take the first step? Fill out the form and let&apos;s talk about your goals.
                Every transformation starts with a conversation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider">Phone</p>
                    <a href="tel:757-672-2695" className="text-white hover:text-gold transition-colors">
                      (757) 672-2695
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider">Email</p>
                    <a href="mailto:transformyourexistence@yahoo.com" className="text-white hover:text-gold transition-colors">
                      transformyourexistence@yahoo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/30">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 uppercase tracking-wider">Location</p>
                    <p className="text-white">San Antonio, TX</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-dark-light border border-white/10 text-white placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 bg-dark-light border border-white/10 text-white placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 bg-dark-light border border-white/10 text-white placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  required
                  className="w-full px-4 py-4 bg-dark-light border border-white/10 text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                >
                  <option value="" className="text-white/30">What is your goal?</option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="Muscle Building">Muscle Building</option>
                  <option value="General Fitness">General Fitness</option>
                  <option value="Body Transformation">Body Transformation</option>
                  <option value="Sports Performance">Sports Performance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell me about your goals and experience..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-dark-light border border-white/10 text-white placeholder-white/30 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center gap-2"
              >
                {submitted ? 'Opening Email...' : (
                  <>
                    <Send size={16} />
                    Book a Consultation
                  </>
                )}
              </button>
              <p className="text-white/30 text-xs text-center">
                This will open your email client with your information pre-filled.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-dark-light border-t border-white/5">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/tye-logo.jpeg"
                alt="TYE"
                width={40}
                height={40}
                className="w-8 h-8 object-contain"
              />
              <span className="text-gold font-serif tracking-wider">Transform. Your. Existence.</span>
            </div>
            <p className="text-white/30 text-sm">
              &copy; {new Date().getFullYear()} TYE Elite Personal Training. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
