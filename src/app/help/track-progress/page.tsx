import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Track Your Progress | emmyflex.ai",
};

const TrackProgressPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE (MAIN CONTENT) */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                How to <span className="text-primary">Track Your Progress</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
              <p className="text-lg text-muted-foreground">
                Tracking your progress helps you stay motivated and ensures you're on the right path. Follow these simple steps to monitor your fitness journey on emmyflex.ai.
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">1. Navigate to the Dashboard</h2>
                  <p className="text-muted-foreground">
                    Once logged in, click on your profile icon and select "Dashboard" to access your fitness data overview.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">2. View Your Progress Charts</h2>
                  <p className="text-muted-foreground">
                    Our AI displays your performance metrics in clear, interactive charts showing your progress over time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">3. Analyze and Adjust</h2>
                  <p className="text-muted-foreground">
                    Use the data to identify trends and let the AI suggest adjustments to your workouts or nutrition for improved results.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4">Last updated: April 24, 2025</p>
              </div>
            </div>

            {/* RIGHT SIDE (Optional visual) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/progress-tracking.png"
                  alt="Progress Tracking"
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

export default TrackProgressPage;
