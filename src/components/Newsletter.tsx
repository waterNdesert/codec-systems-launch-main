import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')`,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Get the latest insights on fintech and communication technology
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/90 border-white text-codec-black placeholder:text-codec-mediumGray"
          />
          <Button
            type="submit"
            disabled={loading}
            className="bg-primary hover:bg-codec-darkGreen transition-colors"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
