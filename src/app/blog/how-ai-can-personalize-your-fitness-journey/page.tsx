import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How AI Can Personalize Your Fitness Journey | emmyflex.ai",
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
                How AI Can Personalize Your <span className="text-primary">Fitness Journey</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
              <p className="text-lg text-muted-foreground">
                The rise of AI in fitness is revolutionizing how we approach health and wellness. With the power of AI, personalized fitness programs are now more accessible than ever before. In this post, we’ll explore how AI is shaping the future of fitness.
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">1. Personalized Workouts</h2>
                  <p className="text-muted-foreground">
                    AI can analyze your fitness data, including your physical capabilities, preferences, and goals, to create tailored workout routines that maximize your results.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">2. Real-Time Feedback</h2>
                  <p className="text-muted-foreground">
                    Using sensors and trackers, AI can provide real-time feedback on your workout, helping you adjust your form and intensity for better performance and injury prevention.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">3. Nutritional Guidance</h2>
                  <p className="text-muted-foreground">
                    AI can also personalize your diet by analyzing your fitness goals and providing meal suggestions that fuel your body for optimal performance and recovery.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">4. Progress Tracking</h2>
                  <p className="text-muted-foreground">
                    With AI, tracking your progress becomes much easier. You’ll receive detailed reports and insights into your fitness journey, allowing you to make informed adjustments along the way.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4">Last updated: April 24, 2025</p>
              </div>

              {/* Call to Action */}
              <div className="flex justify-start pt-6">
                <Link href="/generate-program" className="text-primary font-bold">
                  Start Your Personalized Fitness Journey Today
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE (Optional visual) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/how-ai-can-personalize-your-fitness-journey.png"
                  alt="How AI Can Personalize Your Fitness Journey"
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
