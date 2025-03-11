'use client'

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from "motion/react";
import { Separator } from "@radix-ui/react-separator";
import { ContactForm } from "@/components/contact-form";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sections = ['Chi sono', 'Carriera', 'Agenda', 'Contatti'];
  const [activeTab, setActiveTab] = useState<number | null>(null);

  
  
  return (
    <section ref={containerRef} className="flex flex-col justify-center items-center no-scrollbar w-screen">
      
      <nav className="sticky top-0 flex w-full h-auto p-4 justify-center bg-background z-10">
        <div className="relative flex">
          {sections.map((section, index) => (
            <a
              key={index}
              id="nav-link"
              href={`#${section.toLowerCase().replace(' ', '-')}`}
              className="relative text-md px-4 py-2 text-muted-foreground hover:text-foreground transition-colors w-24"
              onMouseEnter={() => setActiveTab(index)}
              onMouseLeave={() => setActiveTab(null)}
            >
              {section}
            </a>
          ))}
          {activeTab !== null && (
            <motion.div
              className="absolute bottom-0 h-0.5 bg-muted-foreground"
              layoutId="underline"
              initial={false}
              animate={{
                width: document.getElementById('nav-link')!.offsetWidth,
                x: activeTab * document.getElementById('nav-link')!.offsetWidth!,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            />
          )}
        </div>
      </nav>
      {/* Chi sono section */}
      <main id="chi-sono" className="flex w-full md:w-3/4 lg:w-1/2 flex-col justify-center gap-4 items-center bg-background py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
          className="w-full flex justify-center items-center"
        >
          <div className="bg-muted rounded-2xl md:w-[50vw]  flex justify-center overflow-hidden">
            <Image
              src="/FotoDodo.webp"
              width={360}
              height={360}
              alt="Picture of the author"
              className="object-cover"
            />
          </div>
        </motion.div>
        <TextEffect per='char' preset='scale' className="text-3xl mt-4 text-center px-4 italic" delay={1} >
          Con un po&apos; di passione e tanto caffè, si possono fare grandi cose.
        </TextEffect>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 px-6 md:px-0"
        >
          <h2 className="text-2xl font-semibold mb-4">Edoardo Gronda</h2>
          <p className="text-muted-foreground mb-6">
            Data Analyst | Management Engineer con esperienza nel settore di consulenza e analisi dati.
            Laureato con lode in Ingegneria Gestionale presso il Politecnico di Milano e in Economia e Finanza
            presso l&apos;Alma Mater Studiorum di Bologna.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Competenze</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Analisi dati e business intelligence</li>
                <li>Project management</li>
                <li>Modelli statistici avanzati</li>
                <li>Simulazione e ottimizzazione</li>
                <li>Sviluppo strategie d&apos;innovazione</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Lingue</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>Italiano: Madrelingua</li>
                <li>Tedesco: Madrelingua</li>
                <li>Inglese: Avanzato</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
      
        {/* Separator between sections */}
        <div className="w-full flex justify-center my-4">
        <Separator className="w-3/4 lg:w-1/2 text-black" />
        </div>

      {/* Carriera section */}
      <section id="carriera" className="w-full md:w-3/4 lg:w-1/2 py-16 px-6 md:px-0 bg-background">
       
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8">Carriera</h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-muted pl-6 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">Junior Project Manager</h3>
              <p className="text-muted-foreground">Duferco Engineering | Maggio - Settembre 2024</p>
              <p className="mt-2">Budgeting, Planning, Costs Control, Electrolysers, DRI production</p>
            </div>
            
            <div className="border-l-2 border-muted pl-6 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">Data Analyst Intern</h3>
              <p className="text-muted-foreground">Oliver Wyman | Febbraio - Aprile 2024</p>
              <p className="mt-2">Risk modelling</p>
            </div>
            
            <div className="border-l-2 border-muted pl-6 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">Business Analyst</h3>
              <p className="text-muted-foreground">BIP | Ottobre - Dicembre 2023</p>
              <p className="mt-2">Long-term innovation strategy development for a major Italian gas-distributor e Cost-Benefit Analysis model development exploiting VBA</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold mt-16 mb-8">Formazione</h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-muted pl-6 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">MSc Management Engineering</h3>
              <p className="text-muted-foreground">POLITECNICO DI MILANO | Settembre 2021 - Dicembre 2023</p>
              <p className="mt-2">Major in Analytics For Business | Final Grade: 110/110 cum Laude</p>
              <p className="mt-1 text-sm">MSc thesis: Energy efficiency and environmental impact reduction at logistics facilities: conceptualization and development of a simulation-based assessment with real cases applications.</p>
            </div>
            
            <div className="border-l-2 border-muted pl-6 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">BSc Economics and Finance</h3>
              <p className="text-muted-foreground">ALMA MATER STUDIORUM BOLOGNA | Settembre 2018 - Luglio 2021</p>
              <p className="mt-2">Final Grade: 110/110 cum Laude</p>
              <p className="mt-1 text-sm">BSc thesis: Re-emerging from the pandemic aftermath: An Italian SMEs case study</p>
            </div>
            
            <div className="border-l-2 border-muted pl-6 pb-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">Erasmus</h3>
              <p className="text-muted-foreground">COPENHAGEN BUSINESS SCHOOL (CBS) | Agosto 2020 - Gennaio 2021</p>
              <p className="mt-2">One-semester as exchange student during the bachelor</p>
            </div>
            
            <div className="border-l-2 border-muted pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <h3 className="text-xl font-medium">German and Italian Baccalaureate</h3>
              <p className="text-muted-foreground">Deutsche Schule Genua (DSG) | Settembre 2004 - Luglio 2017</p>
              <p className="mt-2">Student & School representative for 3 consecutive years</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-semibold mt-16 mb-8">Attività Extra</h2>
          
          <div className="space-y-6">
            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-xl font-medium">OLIVER WYMAN - HackAtOW 2023</h3>
              <p className="mt-2">Qualified for the international finals in Madrid</p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-xl font-medium">GLOBAL MANAGEMENT CHALLENGE (GMC) 2022</h3>
              <p className="mt-2">Italian Winners and positioned 10th worldwide</p>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg">
              <h3 className="text-xl font-medium">MENTORSHIP PROGRAM - Politecnico di Milano 2023</h3>
              <p className="mt-2">Mentor to 2nd year bachelor students</p>
              <p className="mt-1">Assigned to a mentor with non-negligible work experience from whom to learn</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Agenda section */}
      <section id="agenda" className="w-full md:w-3/4 lg:w-1/2 py-16 px-6 md:px-0 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8">Agenda</h2>
          
          <div className="space-y-8">
            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">Progetti in corso</h3>
                  <p className="mt-2">Attualmente impegnato come Junior Project Manager presso Duferco Engineering</p>
                </div>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">In corso</span>
              </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium">Prossimi eventi</h3>
                  <p className="mt-2">Disponibile per nuove opportunità e collaborazioni a partire da Ottobre 2024</p>
                </div>
                <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm">Prossimamente</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Progetti rilevanti</h3>
            
            <div className="space-y-6">
              <div className="p-4 border border-muted rounded-lg">
                <h4 className="font-medium">Applied Statistics</h4>
                <p className="text-sm text-muted-foreground mt-1">Linear Mixed Effects models and Universal Kriging exploitation for designing earthquakes prevention policies.</p>
              </div>
              
              <div className="p-4 border border-muted rounded-lg">
                <h4 className="font-medium">Advanced Modelling for Operations</h4>
                <p className="text-sm text-muted-foreground mt-1">Agent-Based simulation (Mesa) model in Python aimed at reproducing and investigate the behaviour of a production factory.</p>
              </div>
              
              <div className="p-4 border border-muted rounded-lg">
                <h4 className="font-medium">Advanced Performance Measurement</h4>
                <p className="text-sm text-muted-foreground mt-1">Heavy sell-out data cleaning process exploiting several techniques such as Regular Expressions aimed at laying the basis for developing a dynamic dashboard to inform a C-suite manager.</p>
              </div>
              
              <div className="p-4 border border-muted rounded-lg">
                <h4 className="font-medium">D&A</h4>
                <p className="text-sm text-muted-foreground mt-1">Development of a marketing strategy aimed at prioritizing the most effective marketing levers and optimizing marketing spending for para-pharmaceutical company through MMM (Robyn, Meta).</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Contatti section */}
      <section id="contatti" className="w-full md:w-3/4 lg:w-1/2 py-16 px-6 md:px-0 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8">Contatti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/20 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Telefono</h3>
                <p className="text-muted-foreground mt-1">(+39) 392 1372968</p>
              </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground mt-1">edoardo.gronda23@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Località</h3>
                <p className="text-muted-foreground mt-1">Genova & Milano, Italy</p>
              </div>
            </div>
            
            <div className="bg-muted/20 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/edoardogronda110/" className="text-primary hover:underline mt-1 block" target="_blank" rel="noopener noreferrer">
                  Edoardo Gronda
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-6">Inviami un messaggio</h3>
            <ContactForm />
          </div>
        </motion.div>
      </section>
      
      <footer className="w-full fixed bottom-2 flex flex-row justify-center items-center text-xs p-2 text-muted-foreground -z-10">
        <span className="flex gap-1">
          Sviluppato in collaborazione con 
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/edoardogronda110/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Edoardo Gronda
          </a>
        </span>
      </footer>
    </section>
  );
}