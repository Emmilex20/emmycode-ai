import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | emmyflex.ai",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE (MAIN CONTENT) */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
              <p className="text-lg text-muted-foreground">
                This Privacy Policy outlines how emmyflex.ai collects, uses, and protects your personal information when you use our platform.
              </p>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">1. Information We Collect</h2>
                  <p className="text-muted-foreground">
                    We collect personal information that you provide when signing up, such as your name, email address, and any data entered into the AI fitness assistant.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">2. Use of Information</h2>
                  <p className="text-muted-foreground">
                    Your information is used to personalize your experience, generate tailored fitness programs, and improve our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">3. Data Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell your data. We may share information with trusted partners who help operate our platform under strict confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">4. Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement a variety of security measures to maintain the safety of your personal information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">5. Your Rights</h2>
                  <p className="text-muted-foreground">
                    You have the right to access, correct, or delete your personal data. Contact us for any such requests.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">6. Updates to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. Changes will be posted on this page.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground pt-4">Last updated: April 24, 2025</p>
              </div>
            </div>

            {/* RIGHT SIDE (Optional visual) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/hero-ai3.png"
                  alt="Privacy visual"
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

export default PrivacyPolicyPage;
