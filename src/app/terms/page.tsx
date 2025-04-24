import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | emmyflex.ai",
};

const TermsPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE (MAIN CONTENT) */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Terms & <span className="text-primary">Conditions</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
              <p className="text-lg text-muted-foreground">
                Welcome to emmyflex.ai. By accessing or using our platform, you agree to be bound by these Terms and Conditions. Please read them carefully.
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">1. Use of Service</h2>
                  <p className="text-muted-foreground">
                    Our platform provides AI-generated fitness and nutrition programs tailored to individual needs. You agree to use these services for personal and non-commercial use only.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">2. Account Responsibility</h2>
                  <p className="text-muted-foreground">
                    You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">3. User Data</h2>
                  <p className="text-muted-foreground">
                    We collect and process your data in accordance with our Privacy Policy. By using our platform, you consent to this collection and use of data.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">4. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content on this platform, including AI models, branding, and interface designs, are the intellectual property of emmyflex.ai.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">5. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    We do not guarantee that your results will match the AI-generated expectations. emmyflex.ai is not liable for any damages or injuries arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">6. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. Updated terms will be posted on this page.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Optional visual) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/hero-ai3.png"
                  alt="Terms visual"
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

export default TermsPage;
