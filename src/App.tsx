/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Heart, 
  Globe, 
  Users, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Quote, 
  Mail, 
  ExternalLink,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="font-sans text-idf-dark bg-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 h-20 flex items-center">
        <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <img 
              src="/assets/images/IDF (4).png" 
              alt="Indonesian Diaspora Foundation" 
              className="h-14 w-auto object-contain"
            />
          </a>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8">
              <a href="#mission" className="text-[13px] font-semibold text-idf-gray hover:text-idf-red transition-colors uppercase tracking-wider">Mission</a>
              <a href="#crisis" className="text-[13px] font-semibold text-idf-gray hover:text-idf-red transition-colors uppercase tracking-wider">Crisis</a>
              <a href="#" className="text-[13px] font-semibold text-idf-gray hover:text-idf-red transition-colors uppercase tracking-wider">Impact</a>
            </nav>
            <button className="bg-idf-red text-white px-8 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all hover:bg-idf-red-dark active:scale-95">
              Give Today
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-20 items-start">
          <div className="w-full md:w-[60%]">
            <motion.h1 
              {...fadeIn}
              className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-idf-dark mb-8"
            >
              <span className="text-idf-red">A child in Sumba</span> deserves shoes, a roof, and a future.
            </motion.h1>
            <motion.p 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-idf-gray leading-relaxed mb-10 max-w-xl"
            >
              The Indonesian Diaspora Foundation is uniting Indonesians worldwide to uplift vulnerable communities—changing lives one community at a time.
            </motion.p>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <button className="bg-idf-red text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest transition-all hover:bg-idf-red-dark">
                Give Today
              </button>
              <a href="#mission" className="text-idf-dark ml-8 text-sm font-bold underline underline-offset-4 hover:text-idf-red transition-colors">
                Our Mission
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-[40%] bg-idf-slate p-10 md:p-12 rounded-[3rem]">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-10 mb-16"
            >
              <StatCard label="Islands" value="17,000+" />
              <StatCard label="Diaspora" value="8M+" />
            </motion.div>

            <div className="space-y-8">
              <Pillar 
                num="01" 
                title="Cultural Preservation" 
                text="Celebrating language, art, and tradition across generations." 
              />
              <Pillar 
                num="02" 
                title="Community Empowerment" 
                text="Connecting diaspora resources to rural families in need." 
              />
              <Pillar 
                num="03" 
                title="Philanthropic Action" 
                text="Classroom repairs, clean water, and nutrition programs." 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Image Banner - Maintained but minimal border */}
      <section className="px-6 md:px-20 pb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border border-slate-100"
        >
          <img 
            src="/assets/images/pexels-ahmad-farhan-162807698-29205715.jpg" 
            alt="Children on Sumba Island"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-idf-dark/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
            <h3 className="text-white font-serif text-3xl md:text-4xl mb-2">Children on Sumba Island, East Nusa Tenggara</h3>
            <p className="text-white/80 text-lg font-serif italic">Where hope needs a helping hand</p>
          </div>
        </motion.div>
      </section>

      {/* Our Mission & Vision - Refined Layout */}
      <section id="mission" className="relative py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/Our Vision.jpg" 
            alt="Our Vision Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/[0.85]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-6xl font-serif font-bold text-idf-red">IDF</h2>
              
              <div className="space-y-16">
                <div>
                  <p className="text-xl text-idf-dark leading-relaxed font-medium">
                    <span className="font-bold text-idf-red uppercase tracking-widest text-sm block mb-4">Mission Statement</span>
                    The Indonesian Diaspora Foundation is dedicated to uniting Indonesians around the world and fostering a spirit of global humanity. We preserve our rich cultural heritage, provide vital resources to empower both diaspora members and citizens, and lead philanthropic initiatives that uplift vulnerable communities in Indonesia and beyond.
                  </p>
                </div>

                <div>
                  <p className="text-xl text-idf-dark leading-relaxed font-medium">
                    <span className="font-bold text-idf-red uppercase tracking-widest text-sm block mb-4">Vision</span>
                    Empowering a new generation of Indonesian to connect across borders, celebrate their roots, and lead global change through compassion, culture, and collaboration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crisis Section - Adjusted for theme colors */}
      <section id="crisis" className="py-32 bg-idf-dark text-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-4xl mb-16">
            <p className="text-idf-red font-bold uppercase tracking-[0.2em] text-xs mb-6">The Crisis on the Ground</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-tight">
              In Sumba, a child's biggest dream <br />
              <span className="italic text-white underline decoration-idf-red decoration-2 underline-offset-8">is a pair of shoes.</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Sumba Island in East Nusa Tenggara is one of Indonesia's most underserved regions. Yet its children are growing up without the basic resources they need to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <CrisisPoint 
              stat="60%" 
              title="No shoes on the walk to school" 
              desc="Across Sumba's rural villages, the majority of children begin and end their school day barefoot." 
            />
            <CrisisPoint 
              stat="1 in 4" 
              title="Schools without proper roofing" 
              desc="Classrooms with collapsed ceilings are not exceptions — they are the reality for thousands." 
            />
            <CrisisPoint 
              stat="47%" 
              title="Children who won't finish school" 
              desc="Nearly half of Sumba's children will leave school before completing their basic education." 
            />
          </div>
        </div>
      </section>

      {/* Quote Section - Minimalist Card */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/Indonesian Diaspora Foundation.jpg" 
            alt="Quote Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-idf-dark/[0.85]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 max-w-4xl mx-auto text-center"
          >
            <p className="text-xl md:text-3xl font-serif italic text-white mb-8 leading-relaxed">
              "We carry Indonesia in our hearts wherever we go. And those of us who have been given much, carry a responsibility to give back to those who have so little."
            </p>
            <p className="text-idf-red font-serif italic text-lg mb-12">— Indonesian Diaspora Foundation</p>
            
            <button className="bg-idf-red text-white px-12 py-5 rounded-none text-sm font-bold uppercase tracking-widest transition-all hover:bg-idf-red-dark hover:scale-105 active:scale-95 shadow-xl">
              Give Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-widest text-idf-gray">
                IDF — Est. United States | 305 N 2nd Ave #114, Upland, CA 91786
              </p>
              <p className="text-[11px] uppercase tracking-widest text-idf-gray font-bold">
                © 2025 Indonesian Diaspora Foundation. One people. Every corner of the world.
              </p>
            </div>
            <div className="text-idf-red font-serif italic text-lg tracking-tight">
              Uniting Indonesians Worldwide
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <motion.div variants={fadeIn} className="stat-box">
      <h3 className="text-4xl font-serif text-idf-red mb-1">{value}</h3>
      <p className="text-[12px] font-bold text-idf-gray uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

function Pillar({ num, title, text }: { num: string, title: string, text: string }) {
  return (
    <div className="pillar">
      <div className="flex items-center mb-1">
        <span className="font-serif italic text-idf-red text-xl mr-3">{num}</span>
        <span className="font-bold text-sm uppercase tracking-wider text-idf-dark">{title}</span>
      </div>
      <p className="text-[13px] text-idf-gray leading-relaxed ml-8">{text}</p>
    </div>
  );
}

function CrisisPoint({ stat, title, desc }: { stat: string, title: string, desc: string }) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -10 }}
      className="p-8 border border-white/5 hover:border-idf-red/20 hover:bg-white/5 transition-all duration-300 cursor-default group"
    >
      <p className="text-idf-red text-5xl font-serif mb-6 group-hover:scale-110 transition-transform origin-left duration-500">{stat}</p>
      <h4 className="text-lg font-bold mb-4 uppercase tracking-wider group-hover:text-idf-red transition-colors duration-300">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{desc}</p>
    </motion.div>
  );
}
