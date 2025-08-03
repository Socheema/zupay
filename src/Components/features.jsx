import { motion } from "motion/react";
import featureimage from "../assets/feature.png";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";

const FeatureCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="bg-[#0a0b0b] backdrop-blur-sm cursor-pointer rounded-[24px] p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-2xl mb-4">
        <span className="text-white">{title[0]}</span>{" "}
        <span className="text-[#fdf0d5]">{title[1]}</span>
      </h3>
      <div className="relative h-[5rem] my-5 flex items-center">
        <img
          src={image}
          alt=""
          className="absolute w-[5rem] bottom-0"
          aria-hidden="true"
        />
      </div>
      <p className="text-gray-300 my-8">{description}</p>
    </motion.div>
  );
};

const features = [
  {
    title: ["Versatile", "Use"],
    description:
      "Use your digital card for online purchases, in-store purchases, and more",
    image: feature1,
  },
  {
    title: ["Easy", "Management"],
    description:
      "Manage your digital card and transactions easily through our user-friendly app.",
    image: feature2,
  },
  {
    title: ["Accepted", "Everywhere"],
    description:
      "Use your digital card at any merchant that accepts Visa or Mastercard.",
    image: feature3,
  },
  {
    title: ["Customer", "Support"],
    description:
      "Our team is ready to help you with any questions or issues you may have.",
    image: feature4,
  },
];

function FeaturesComponent() {
  return (
    <div className="bg-#0c0510 min-h-screen overflow-hidden relative pb-[5rem]">
      <img src={featureimage} alt="" className="w-full h-full absolute" />
      <div className="pt-[5rem] px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl text-center bold md:text-3xl mb-16 text-white tracking-tight">
            Flex your digital Wealth with{" "}
            <span className="text-[#c7f9cc">zupay</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl max-auto">
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureCard key={index + 2} {...feature} />
            ))}
          </div>
          <motion.div
            className="bg-[#0a0b0b] backdrop-blur-sm rounded-[24px] p-8 lg:flex lg:flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl mb-4">
              <span className="text-[#fdf0d5]">Effortlessly</span>
              {""}
              <span className="text-[#c7f9cc]">Manage Your Money</span>
            </h3>
            <p className="text-gray-300 my-8">
              Transfer funds between your{" "}
              <span className="text-[#fdf0d5]"> bank account</span> or{" "}
              <span className="text-[#fdf0d5]">wallet</span> with ease.
            </p>
            <div className="min-h-[15rem] flex justify-center flex-grow mt-8">
              <div className="abslute bottom-8">
                <img
                  src={feature5}
                  alt=""
                  className="w-[10rem] md:w-[20rem] h-auto"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComponent;
