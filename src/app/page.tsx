"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 p-6 sm:p-12">
      {/* Header */}
      <header className="text-center mb-12">
        <Image src="/logo.png" alt="IRA Biosciences Logo" width={150} height={50} />
        <h1 className="text-4xl font-bold mt-4 text-blue-700">IRA Biosciences</h1>
      
      </header>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Services</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600">Genomics Services</h3>
            <ul className="list-disc pl-5 mt-3 text-gray-700">
              <li>Whole Genome Sequencing and Data Analysis</li>
              <li>16S rRNA Gene Sequencing</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600">Microbial/Metabolomics Services</h3>
            <ul className="list-disc pl-5 mt-3 text-gray-700">
              <li>Antimicrobial & Antifungal Activity Assays</li>
              <li>Cytotoxicity Assays (Artemia salina)</li>
              <li>Antioxidant Activity (DPPH Assay)</li>
              <li>LC-MS Analysis</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Costs</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc pl-5 text-gray-700">
            <li>Bacterial Whole Genome Sequencing: Rs. 40,000 (single sample), Rs. 35,000 (bulk)</li>
            <li>16S rRNA Gene Sequencing</li>
            <li>Antibacterial Activity: Rs. 10,000 (with 4 test strains)</li>
            <li>Antifungal Activity: Rs. 10,000 (with 2 test strains)</li>
            <li>Cytotoxicity (Artemia salina assay): Rs. 500/sample</li>
            <li>Antioxidant Activity (DPPH assay): Rs. 500/sample</li>
            <li>LC-MS Analysis: Rs. 400/sample</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Meet Our Team</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Dr. Imran Sajid</h3>
            <p className="text-gray-700">CEO, IRA Biosciences</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Dr. Adeela Fatima</h3>
            <p className="text-gray-700">Technical Manager (PhD, Post Doc)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Linta Khalid</h3>
            <p className="text-gray-700">Bioinformatician & Junior Scientist</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-blue-600 text-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt /> IRA Biosciences, 57 J 1, LDA Avenue 1, Lahore</p>
        <p className="flex items-center justify-center gap-2 mt-2"><FaPhone /> 0317-4037163, 0300-4767115</p>
        <p className="flex items-center justify-center gap-2 mt-2"><FaEnvelope /> irabiosciences8@gmail.com</p>
      </section>
    </div>
  );
}

