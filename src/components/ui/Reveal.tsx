import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%" | "full";
  className?: string; // Adicione isso
  delay?: number;
}

export const Reveal = ({
  children,
  width = "fit-content",
  className,
  delay = 0.25,
}: Props) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible" // Já engatilha quando aparece no scroll
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className} // Aplica as classes de posicionamento aqui
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
