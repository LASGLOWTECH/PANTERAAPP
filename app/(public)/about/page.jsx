"use client";
import { pantheraSections } from "@/components/pantheraSections";
import Image from "next/image";
import { motion } from "framer-motion";



import { FaEye, FaBullseye, FaStar, FaLightbulb, FaLeaf } from "react-icons/fa";

import heroImg from "@/public/assets/hero.jpg";
import chefImg from "@/public/assets/hero2.jpg";
import ambianceImg from "@/public/assets/story.jpg";
import Summary from "@/public/assets/summary.jpg";
import Summary1 from "@/public/assets/summary1.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  return (
    <div className="bg-dark text-white font-inter">

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src={heroImg}
          alt="Panthera Lounge"
          className="object-cover w-full h-full brightness-20"
          fill
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl  font-serif font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Panthera Lounge
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
           Panthera is an upscale fine-dining and lifestyle restaurant inspired by the exotic nature of tropical panthers
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <motion.section
        className="py-20 px-6 md:px-16 bg-dark-bg text-footer-text text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <motion.div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl font-semibold text-footer-accent mb-6 tracking-wide">
            Our Story
          </h2>
          <p className="text-footer-text text-lg  text-gray-400 font-base">
            First and foremost, Panthera embraces the panther's aura of mystery. Tucked away in a
 discreet and high profile corner of the city, the restaurant invites guests to embark on  an 
adventure, an exploration of flavors that would ignite their curiosity and leave them
 longing for more. The restaurant's façade exuded an air of enigma, with dimly lit
 entranceways and alluring shadows, beckoning guests to step into a world unlike any they
 have experienced before
          </p>
          <p className="text-footer-text text-gray-400 text-base leading-relaxed">
           Beyond the dining experience, Panthera embraces its responsibility to the environment.
 Inspired by the panther's conservation efforts, the restaurant implements sustainable
 practices, sourcing ingredients ethically and supporting local producers. By partnering
 with environmental organizations, Panthera actively contributes to the preservation of
 wildlife habitats, acting as a steward for the panther and its counterparts in the natural
 world
          </p>
          <p className="text-footer-text  text-gray-400 text-base leading-relaxed">
            As the doors swing open, guests are welcomed into an atmosphere of sleek sophistication,
 mirroring the panther's unparalleled elegance. The interior design boasts of a harmonious
 blend of modern aesthetics and timeless charm, where plush furnishings intertwined with
 contemporary artistry. The tables, adorned with luxurious silks and  linens, symbolizes the
 panther's inky coat, while the soft glow of candlelight evokes the feline's piercing gaze.
 Panthera's menu showcases the panther's prowess and adaptability. Just like the
 panther's ability to thrive in diverse landscapes, the culinary creations transcendes
 borders and fuses global influences, resulting in an exceptional fusion of flavors. The
 kitchen team, led by visionary Chef __________ , pushes the boundaries of gastronomy,
 incorporating innovative techniques and the finest ingredients to craft dishes that will
 both delight and surprise guests
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full md:w-3/4 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] bg-white/5">
              <Image
                src={ambianceImg}
                alt="Panthera Restolounge Ambiance"
                className="rounded-lg object-cover w-full aspect-video md:aspect-[4/3]"
                placeholder="blur"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-footer-accent text-dark-bg text-xs font-semibold uppercase tracking-wider p-2 rounded-lg shadow-xl">
           Panthera RestoLounge 
              </div>
            </div>
          </div>
          <p className="text-footer-text text-base leading-relaxed font-semibold text-footer-accent mt-6">
            Panthera RestoLounge  Inspired by excellence, driven by experience.
          </p>
        </motion.div>
      </motion.section>

      {/* Vision & Mission */}
<motion.section
  className="py-20 px-6 md:px-16 max-w-7xl mx-auto bg-dark-bg rounded-lg text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
  <h2 className="text-4xl font-bold text-footer-accent mb-12">
    Vision & Mission
  </h2>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Vision */}
    <div className="flex flex-col md:items-left items-center">
      <FaEye className="text-footer-accent text-5xl mb-4" />
      <h3 className="text-2xl  font-bold  mb-4">Our Vision</h3>
      <p className="text-gray-400 text-justify">
        Our vision at Panthera is to redefine the boundaries of fine dining by crafting a captivating
 and immersive culinary experience that celebrates the allure and spirit of panthers. We
 aim to be a trailblazer in the industry, inspiring guests with our commitment to elegance,
 innovation, and sustainability.
 Through meticulous attention to detail and an unwavering passion for culinary excellence,
 we strive to create an ambiance that transports guests to a realm of opulence and
 enchantment. Our vision is to curate an extraordinary sensory journey where flavors
 harmonize, presentations astonish, and every aspect of the dining experience reflects our
 dedication to craftsmanship.
 As a leader in the culinary world, we seek to push boundaries, foster a culture of
 innovation, and collaborate with renowned chefs and artists to create groundbreaking
 culinary artistry. We aim to continuously evolve, adapt, and stay ahead of industry trends,
 setting new standards for excellence and inspiring others to follow.
 At the core of our vision is a commitment to sustainability and environmental
 stewardship. We strive to source locally and responsibly, minimizing our carbon footprint
 and promoting eco-conscious initiatives. We believe that by embracing sustainability, we
 can not only provide exceptional dining experiences but also make a positive impact on
 the world around us
      </p>
    </div>

    {/* Mission */}
    <div className="flex flex-col md:items-left items-center">
      <FaBullseye className="text-footer-accent text-5xl mb-4" />
      <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
      <p className="text-gray-400  text-justify font-normal">
       Our mission at Panthera is to provide an exceptional fine dining experience that celebrates
 the captivating qualities of panthers, offering a harmonious blend of elegance, innovation,
 and sustainability. We are dedicated to delighting our guests with meticulously crafted
 dishes, immersive ambiance, and impeccable service.
 Through culinary artistry and attention to detail, we aim to create a memorable dining
 experience that surpasses expectations and leaves a lasting impression on our guests. We
 strive to showcase the flavors, textures, and presentations that reflect the panther's
 grace, power, and allure.
 We are committed to fostering a culture of innovation and continuous improvement
 within our team. By encouraging collaboration, creativity, and a passion for culinary
 excellence, we aim to push boundaries and set new standards in the industry. We invest in
 the growth and development of our staff, empowering them to be leaders and
 ambassadors of our brand.
      </p>



       <p className="text-footer-text text-gray-400  text-justify font-normal text-base leading-relaxed">
    Sustainability is a cornerstone of our mission. We are dedicated to sourcing locally and
 responsibly, reducing waste, and implementing eco-conscious practices throughout our
 operations. By prioritizing sustainability, we aim to make a positive impact on the
 environment and inspire others in the industry to follow suit.
 We believe in creating a welcoming and inclusive environment where guests feel like they
 are part of the Panthera family. Our mission is to provide personalized and attentive
 service that exceeds expectations, ensuring that every visit to Panthera is an
 unforgettable experience.
 In summary, our mission at Panthera is to elevate the fine dining experience by celebrating
 the essence of panthers through culinary artistry, innovation, sustainability, and
 exceptional service. We strive to create an enchanting and memorable journey for our
 guests, fostering a sense of community, and leaving a positive impact on both the culinary
 world and the world at large
          </p>
    </div>
  </div>
</motion.section>

{/* Executive Summary */}

<motion.section
    
    className="py-20 px-6 md:px-16 max-w-5xl mx-auto flex flex-col items-center gap-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Image (short banner style with smooth fade) */}
    <motion.div
      className="w-full h-64 md:h-[600px] rounded-xl shadow-xl overflow-hidden mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src={Summary}
        alt="summary"
        className="w-full h-full object-cover rounded-lg"
        placeholder="blur"
        loading="lazy"
      />
    </motion.div>

    {/* Text (full width with delayed fade) */}
    <motion.div
      className="w-full text-center md:text-left "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <h3 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-3">
        
      EXECUTIVE SUMMARY
      </h3>
      <p className="text-gray-400  text-justify font-normal text-base md:text-lg leading-relaxed ">
      Panthera is a fine dining restaurant that draws inspiration from the captivating
 qualities of panthers, creating a unique brand story that celebrates elegance,
 fierceness, and sustainability. With meticulous attention to detail, Panthera offers
 an extraordinary dining experience that combines bold flavors, refined
 presentation, and immersive ambiance.
 Our brand story unfolds through a series of exclusive and immersive dining
 experiences called "Panthera's Secrets." These experiences take guests on a
 culinary journey where they become part of a clandestine society, unraveling
 clues and indulging in curated dishes and sensory encounters. 
      </p>

      <div className="grid gap-1 md:auto-rows-[250px] lg:auto-rows-[300px] 
                   grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ">

 <div className=" ">

<p className="text-gray-400  font-normal text-base md:text-lg leading-relaxed ">
      Sustainability lies at the heart of Panthera, intertwining with every endeavor to create a fine dining experience that not only delights the senses but also respects and preserves the natural world. Panthera's commitment to sustainability starts with its sourcing practices. The restaurant places a strong emphasis on locally and responsibly sourced ingredients, forging close relationships with farmers, fishermen, and artisans who share their values. By prioritizing local and seasonal produce, Panthera reduces its carbon footprint and supports the local community while ensuring the freshest and highest quality ingredients grace their dishes
      </p>
        
      </div>

<Image
        src={Summary1}
        alt="summary"
        className="w-full h-full object-cover rounded-lg"
        placeholder="blur"
        loading="lazy"
      />
      <div className=" ">


        
      </div>


        
      </div>
    </motion.div>
  </motion.section>








{pantheraSections.map((section, idx) => (
  <motion.section
    key={section.title}
    className="pb-10 px-6 md:px-16 max-w-5xl mx-auto flex flex-col items-center gap-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Image (short banner style with smooth fade) */}
    <motion.div
      className="w-full h-64 md:h-[600px] rounded-xl shadow-xl overflow-hidden mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src={section.img}
        alt={section.title}
        className="w-full h-full object-cover rounded-lg"
        placeholder="blur"
        loading="lazy"
      />
    </motion.div>

    {/* Text (full width with delayed fade) */}
    <motion.div
      className="w-full text-center md:text-left space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <h3 className="text-3xl md:text-4xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-3">
        {section.icon && <section.icon className="text-footer-accent text-5xl" />}
        {section.title}
      </h3>
      <p className="text-gray-400  text-justify font-normal text-base md:text-lg leading-relaxed ">
        {section.text}
      </p>
    </motion.div>
  </motion.section>
))}

{/* Meet Our Team */}
<motion.section
  className="py-20 px-6 md:px-16 max-w-7xl mx-auto bg-dark-bg rounded-lg text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <h2 className="text-4xl font-bold text-footer-accent mb-12">Meet Our Team</h2>
  <div className="grid md:grid-cols-3 gap-12 text-center">
    {["Chef Antonio", "Chef Maria", "John Doe"].map((name, idx) => (
      <motion.div
        key={idx}
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
      >
        <Image
          src={chefImg}
          alt={name}
          className="rounded-full w-48 h-48 object-cover mb-4 shadow-lg"
          placeholder="blur"
        />
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-300 text-sm">
          {idx === 0
            ? "Executive Chef & Culinary Director"
            : idx === 1
            ? "Sous Chef & Pastry Specialist"
            : "Bar Manager & Mixologist"}
        </p>
      </motion.div>
    ))}
  </div>
</motion.section>


      {/* Our Values */}
      {/* Our Values */}
<motion.section
  className="py-20 px-6 md:px-16 max-w-7xl mx-auto text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
  <h2 className="text-4xl font-bold text-footer-accent mb-12">
    Our Values
  </h2>

  <div className="grid md:grid-cols-3 gap-12 text-center">
    
    <div className="flex flex-col items-center">
      <FaStar className="text-footer-accent text-5xl mb-4" />
      <h3 className="text-2xl font-normal mb-2">Excellence</h3>
      <p className="text-gray-300">We strive for perfection in every dish, cocktail, and experience we offer.</p>
    </div>

    <div className="flex flex-col items-center">
      <FaLightbulb className="text-footer-accent text-5xl mb-4" />
      <h3 className="text-2xl font-normal mb-2">Innovation</h3>
      <p className="text-gray-300">Blending classic techniques with modern flair to keep our menu dynamic and exciting.</p>
    </div>

    <div className="flex flex-col items-center">
      <FaLeaf className="text-footer-accent text-5xl mb-4" />
      <h3 className="text-2xl font-normal mb-2">Sustainability</h3>
      <p className="text-gray-300">We source responsibly, reduce waste, and care for the environment as part of our ethos.</p>
    </div>

  </div>
</motion.section>


      {/* CTA / Reservations */}
      <motion.section
        className="py-20 px-6 md:px-16 bg-footer-accent rounded-lg text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6 text-dark">Experience  Luxury Dining</h2>
        <p className="text-dark mb-8 max-w-xl mx-auto">
          Reserve your table today and immerse yourself in the elegance of Panthera Lounge.
        </p>
        
      </motion.section>

    </div>
  );
};

export default AboutUs;
