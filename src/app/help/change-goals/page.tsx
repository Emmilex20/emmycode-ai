import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Change Your Fitness Goals | emmyflex.ai",
};

const ChangeGoalsHelpPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Changing Your <span className="text-primary">Fitness Goals</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>

              <p className="text-lg text-muted-foreground">
                Your fitness journey is personal and ever-evolving. Here’s how to update your goals on emmyflex.ai to match your progress and preferences.
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">1. Login to Your Account</h2>
                  <p className="text-muted-foreground">
                    Head to the login page and enter your credentials to access your dashboard.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">2. Go to Settings</h2>
                  <p className="text-muted-foreground">
                    Once logged in, click on your profile icon and navigate to <strong>Settings</strong>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">3. Edit Fitness Preferences</h2>
                  <p className="text-muted-foreground">
                    Under <strong>Fitness Preferences</strong>, select <strong>Edit Goals</strong>. You can choose from options like weight loss, muscle gain, or endurance training.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">4. Save Your Changes</h2>
                  <p className="text-muted-foreground">
                    After selecting your new goal, hit <strong>Save</strong>. Your personalized program will automatically adjust to reflect the new objective.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4">Last updated: April 24, 2025</p>
              </div>
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/change-fitness-goals.png"
                  alt="Change fitness goals visual"
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

export default ChangeGoalsHelpPage;
