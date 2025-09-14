import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-05T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500">
      <div className="mb-6">
        <h3 className="text-orange-400 text-xl mb-2">Our main event will take place in Kathmandu in 2025!</h3>
        <p className="text-white/80">With tech talents from all over Nepal, you don't wanna miss it for sure!</p>
      </div>
      
      <div className="flex justify-center items-center gap-4 mb-8">
        <div className="text-center">
          <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-white/60">Days</div>
        </div>
        <div className="text-3xl text-white/40">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-white/60">Hours</div>
        </div>
        <div className="text-3xl text-white/40">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-white/60">Minutes</div>
        </div>
        <div className="text-3xl text-white/40">:</div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-white/60">Seconds</div>
        </div>
      </div>

      <Button className="glass-button px-6 py-3 rounded-2xl border-0 text-white hover:scale-105 transition-all duration-300">
        Parter With Us
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      
    </div>
  );
}