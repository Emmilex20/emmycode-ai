import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Benefits of an AI-Powered Fitness Coach | emmyflex.ai",
};

const BlogPost = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE (MAIN CONTENT) */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                The Benefits of an AI-Powered <span className="text-primary">Fitness Coach</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
              <p className="text-lg text-muted-foreground">
                AI-powered fitness coaches are revolutionizing the way we approach personal training. With AI, personalized fitness routines, progress tracking, and real-time feedback are more accessible than ever. In this post, we explore the key benefits of using an AI-powered fitness coach.
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">1. Tailored Fitness Plans</h2>
                  <p className="text-muted-foreground">
                    An AI-powered coach uses your fitness data to create custom workout plans that suit your personal needs and goals.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">2. Real-Time Progress Tracking</h2>
                  <p className="text-muted-foreground">
                    AI tracks your workouts, providing you with real-time feedback and progress reports, so you can adjust your routines for better results.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">3. Injury Prevention</h2>
                  <p className="text-muted-foreground">
                    Using real-time analysis of your movements, AI can detect improper form and offer suggestions to prevent injuries during your workouts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">4. Motivation and Consistency</h2>
                  <p className="text-muted-foreground">
                    AI provides personalized encouragement and reminders, ensuring you stay motivated and consistent with your fitness goals.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4">Last updated: April 24, 2025</p>
              </div>

              {/* Call to Action */}
              <div className="flex justify-start pt-6">
                <Link href="/generate-program" className="text-primary font-bold">
                  Start Your AI-Powered Fitness Journey Today
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE (Optional visual) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/the-benefits-of-an-ai-powered-fitness-coach.jpg"
                  alt="The Benefits of an AI-Powered Fitness Coach"
                  className="rounded-lg object-cover object-center shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
