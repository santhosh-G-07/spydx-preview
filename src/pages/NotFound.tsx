import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold font-display text-primary mb-2 animate-pulse-glow inline-block px-8 py-4 rounded-2xl">404</h1>
        <p className="text-xl text-muted-foreground mb-2 mt-4">
          Oops! This page doesn't exist.
        </p>
        <p className="text-muted-foreground mb-8">
          Looks like you've ventured into uncharted territory.
        </p>
        <Button asChild className="bg-gradient-accent text-primary-foreground font-semibold shadow-cyan">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
