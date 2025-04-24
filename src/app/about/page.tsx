import Image from "next/image";
import Link from "next/link";
import { ZapIcon, ArrowRightIcon, UserIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      {/* ABOUT HERO SECTION */}
      <section className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE */}
            <div className="lg:col-span-7 space-y-8 relative">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-foreground">Who We Are at </span>
                <span className="text-primary">emmyflex.ai</span>
              </h1>

              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We’re on a mission to help you unlock your best self — through advanced AI-powered fitness and nutrition guidance tailored just for you. Think of us as your virtual coach, nutritionist, and motivator.
              </p>

              <ul className="list-disc list-inside text-muted-foreground space-y-2 text-base">
                <li>Custom workouts and meal plans for your body goals</li>
                <li>Smart tracking and real-time AI recommendations</li>
                <li>Minimalist design, seamless experience</li>
                <li>Results you can see — and feel</li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-primary/10 w-fit">
                <ZapIcon className="text-primary w-10 h-10" />
              </div>
              <h2 className="mt-6 text-2xl font-bold tracking-tight">
                Trusted by 500+ users
              </h2>
              <p className="text-muted-foreground text-center mt-2 max-w-xs">
                Join a growing community transforming their lives through personalized AI fitness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">What Users Are Saying</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                name: "Jessica",
                quote: "I've never had a plan so tailored to my body and lifestyle — this AI is amazing!",
              },
              {
                name: "David",
                quote: "emmyflex.ai helped me lose 10kg in 3 months with realistic, smart routines.",
              },
              {
                name: "Fatima",
                quote: "The interface is beautiful, simple, and motivating. I look forward to working out!",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-background/60 space-y-4">
                <StarIcon className="text-primary" />
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <UserIcon className="w-4 h-4 text-muted-foreground" />
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 border-t border-border bg-background/70">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Meet the Team</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              {
                name: "Emmanuel",
                role: "Founder & Developer",
                image: "/founder.jpg",
              },
              {
                name: "Zara",
                role: "AI Research Lead",
                image: "/team-ai.png",
              },
              {
                name: "Jay",
                role: "Fitness Advisor",
                image: "/team-fitness.png",
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center space-y-3 max-w-[200px]">
                <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border border-primary/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 text-center bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Start building your personalized program today.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground px-8 py-6 text-lg font-medium"
          >
            <Link href="/generate-program" className="flex items-center font-mono">
              Build Your Program
              <ArrowRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
