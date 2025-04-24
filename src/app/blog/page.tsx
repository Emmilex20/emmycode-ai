// app/blog/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | emmyflex.ai",
};

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE (BLOG POSTS) */}
            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Latest <span className="text-primary">Blog Posts</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Stay updated with the latest news, trends, and insights from the world of fitness, AI, and wellness.
              </p>

              {/* Blog Post 1 */}
              <div className="bg-background/80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-4xl font-semibold text-primary mb-4">
                  The Future of AI in Fitness
                </h2>
                <p className="text-muted-foreground mb-4">
                  In this post, we explore how artificial intelligence is revolutionizing the fitness industry, from personalized workout plans to tracking progress. Discover how AI is shaping the future of fitness.
                </p>
                <a
                  href="/blog/the-future-of-ai-in-fitness"
                  className="text-primary font-medium underline hover:text-primary/70"
                >
                  Read More
                </a>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-background/80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-4xl font-semibold text-primary mb-4">
                  How AI Can Personalize Your Fitness Journey
                </h2>
                <p className="text-muted-foreground mb-4">
                  Learn how AI can create personalized workout and diet plans tailored specifically to your needs, goals, and body type. This is the next level of fitness personalization.
                </p>
                <a
                  href="/blog/how-ai-can-personalize-your-fitness-journey"
                  className="text-primary font-medium underline hover:text-primary/70"
                >
                  Read More
                </a>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-background/80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-4xl font-semibold text-primary mb-4">
                  The Benefits of an AI-powered Fitness Coach
                </h2>
                <p className="text-muted-foreground mb-4">
                  Discover the benefits of having an AI-powered fitness coach that adapts to your progress and provides real-time feedback to enhance your fitness journey.
                </p>
                <a
                  href="/blog/the-benefits-of-an-ai-powered-fitness-coach"
                  className="text-primary font-medium underline hover:text-primary/70"
                >
                  Read More
                </a>
              </div>

              {/* Pagination - if applicable */}
              <div className="flex justify-between mt-12">
                <a
                  href="#"
                  className="text-primary font-medium hover:text-primary/70"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="text-primary font-medium hover:text-primary/70"
                >
                  Next
                </a>
              </div>
            </div>

            {/* RIGHT SIDE (Optional Sidebar) */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-background/80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Categories</h3>
                  <ul className="text-lg text-muted-foreground space-y-2">
                    <li><a href="/blog/ai-fitness" className="hover:text-primary">AI Fitness</a></li>
                    <li><a href="/blog/health-and-wellness" className="hover:text-primary">Health & Wellness</a></li>
                    <li><a href="/blog/nutrition" className="hover:text-primary">Nutrition</a></li>
                  </ul>
                </div>

                <div className="bg-background/80 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Popular Posts</h3>
                  <ul className="text-lg text-muted-foreground space-y-2">
                    <li><a href="/blog/the-future-of-ai-in-fitness" className="hover:text-primary">The Future of AI in Fitness</a></li>
                    <li><a href="/blog/how-ai-can-personalize-your-fitness-journey" className="hover:text-primary">How AI Can Personalize Your Fitness Journey</a></li>
                    <li><a href="/blog/the-benefits-of-an-ai-powered-fitness-coach" className="hover:text-primary">The Benefits of an AI-powered Fitness Coach</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
