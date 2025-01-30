import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import line from "../assets/hiasan/line.png";
import lineBlack from "../assets/hiasan/line-black.png";

const faqs = [
    {
      question: "Apa faktor yang mempengaruhi popularitas suatu destinasi wisata lokal?",
      answer: "Popularitas destinasi wisata lokal dipengaruhi oleh berbagai faktor, termasuk aksesibilitas, infrastruktur, promosi pariwisata, keunikan budaya dan alam, serta pengalaman yang ditawarkan. Peran media sosial dan ulasan dari pengunjung sebelumnya juga sangat berpengaruh dalam meningkatkan daya tarik suatu destinasi."
    },
    {
      question: "Bagaimana dampak pariwisata terhadap lingkungan dan bagaimana mengelolanya secara berkelanjutan?",
      answer: "Pariwisata dapat berdampak positif maupun negatif terhadap lingkungan. Dampak negatif meliputi polusi, degradasi ekosistem, dan eksploitasi sumber daya alam. Untuk mengelola pariwisata secara berkelanjutan, diperlukan regulasi ketat, pendidikan lingkungan bagi wisatawan, serta penerapan konsep ecotourism yang menekankan pada konservasi dan kesejahteraan masyarakat lokal."
    },
    {
      question: "Apa peran teknologi dalam pengembangan destinasi wisata lokal?",
      answer: "Teknologi berperan penting dalam pengembangan wisata lokal, mulai dari pemasaran digital, sistem reservasi online, hingga penggunaan augmented reality (AR) dan virtual reality (VR) untuk meningkatkan pengalaman wisata. Selain itu, analisis data besar (big data) dapat membantu pemangku kepentingan dalam memahami pola kunjungan wisatawan dan merancang strategi promosi yang lebih efektif."
    },
    {
      question: "Bagaimana pemerintah dapat mendukung pengembangan destinasi wisata lokal?",
      answer: "Pemerintah dapat mendukung pengembangan wisata lokal melalui kebijakan yang mendukung industri pariwisata, seperti pembangunan infrastruktur, pelatihan bagi pelaku usaha lokal, serta promosi destinasi melalui kampanye nasional dan internasional. Selain itu, kebijakan berbasis keberlanjutan dapat memastikan bahwa pertumbuhan sektor pariwisata tidak merusak lingkungan dan budaya setempat."
    },
    {
      question: "Apa tantangan utama dalam mempertahankan daya tarik destinasi wisata lokal?",
      answer: "Tantangan utama dalam mempertahankan daya tarik wisata lokal meliputi degradasi lingkungan akibat overtourism, kurangnya perawatan fasilitas, persaingan dengan destinasi lain, serta perubahan tren wisata global. Untuk mengatasi tantangan ini, diperlukan inovasi dalam pengelolaan destinasi, pelibatan komunitas lokal, serta strategi pemasaran yang adaptif terhadap perubahan preferensi wisatawan."
    }
  ];
  

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container w-full mx-auto px-4 md:px-40 flex flex-col items-center justify-center relative py-20 bg-gray-900 dark:bg-white">
      <img src={line} className="w-full dark:hidden absolute top-0 md:px-40 px-4" alt="" />
      <img src={lineBlack} className="w-full hidden dark:flex absolute top-0 md:px-40 px-4" alt="" />
      <div className="header flex flex-col items-start text-start w-full text-white dark:text-black">
        <h1 className="md:text-3xl text-2xl font-semibold">Frequently Asked Questions</h1>
        <p>Pertanyaan yang sering muncul</p>
      </div>
      <div className="faq w-full  mx-auto py-4 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-400 rounded-lg overflow-hidden shadow-sm">
            <button
              className="w-full flex justify-between items-center text-white dark:text-black p-4 text-left bg-gray-900 dark:bg-white dark:hover:bg-gray-100 hover:bg-gray-950 "
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 text-white dark:text-black dark:bg-white"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;