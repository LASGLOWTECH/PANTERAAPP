"use client";

import { FaUtensils, FaWineGlass, FaMusic } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import food1 from "@/public/assets/food7.jpeg";

const services = [
  {
    icon: FaUtensils,
    title: "SIGNATURE GOURMET CUISINE",
    description:
      `Our culinary team brings together
African and international flavors with a modern touch, delivering finely crafted dishes made to impress. Each dish is prepared with care and reflects the rich food culture of the city.`,
    iconColor: "text-[#ff5e00]"
  },
  {
    icon: FaWineGlass,
    title: "HANDCRAFTED COCKTAILS & PREMIUM DRINKS",
    description:
      `Enjoy expertly mixed cocktails, premium wines, and a wide selection of spirits that perfectly complement our sophisticated atmosphere. Every drink is mixed to match the refined taste of our guests.`,
    iconColor: "text-[#ff5e00]",
  },
  {
    icon: FaMusic,
    title: "CURATED ENTERTAINMENT & AMBIENCE",
    description:
      `Designed for lovers of style and comfort, our lounge offers a warm, upscale vibe. With the right blend of music, lighting, and mood, we create an environment ideal for socializing, relaxing, and celebrating.`,
    iconColor: "text-[#ff5e00]",
  },
];

const PantheraServices = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          
          {/* Right Column: Services */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gold2 mb-8 tracking-wider">
              OUR SERVICES
            </h2>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex bg-dark p-4 rounded-2xl items-start space-x-4 sm:space-x-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.6, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-amber-500 to-gold2 shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Left Column: Image */}
          <motion.div
            className="order-2 lg:order-1 flex items-stretch"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full h-full rounded-xl shadow-2xl overflow-hidden">
              <Image
                src={food1}
                alt="Panthera Restaurant Dish"
                className="w-full h-full object-cover"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PantheraServices;
