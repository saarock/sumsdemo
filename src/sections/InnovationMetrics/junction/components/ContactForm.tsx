import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="glass-card rounded-3xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="glass-subtle rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-2xl mb-4 text-white">Get in Touch</h3>
        <p className="text-white/70">
          Ready to be part of Junction X Kathmandu 2025? Drop us a message and let's make history together! 🚀
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your awesome name"
            value={formData.name}
            onChange={handleChange}
            required
            className="glass-subtle border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="glass-subtle border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your interest in Junction X Kathmandu 2025, partnership ideas, or just say hi! ✨"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="glass-subtle border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 transition-all duration-300 resize-none"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full glass-button border-0 text-white hover:scale-105 transition-all duration-300 py-6"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message 🚀
        </Button>
      </form>
    </div>
  );
}