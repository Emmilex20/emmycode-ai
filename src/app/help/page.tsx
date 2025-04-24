import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center | emmyflex.ai",
};

const HelpPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT SIDE (MAIN CONTENT) */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Help <span className="text-primary">Center</span>
              </h1>
              <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
              <p className="text-lg text-muted-foreground">
                Need assistance? We're here to help you make the most out of emmyflex.ai. Explore FAQs, troubleshooting tips, and contact support.
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">Getting Started</h2>
                  <p className="text-muted-foreground">
                    Learn how to sign up, set up your profile, and start using your AI-powered fitness coach.
                  </p>
                </div>

                <div>
  <h2 className="text-2xl font-semibold text-primary mb-2">FAQs</h2>
  <ul className="list-disc list-inside text-muted-foreground space-y-2">
    <li>
      <Link href="/help/reset-password" className="hover:text-primary transition-colors">
        How do I reset my password?
      </Link>
    </li>
    <li>
      <Link href="/help/change-goals" className="hover:text-primary transition-colors">
        Can I change my fitness goals after signup?
      </Link>
    </li>
    <li>
      <Link href="/help/track-progress" className="hover:text-primary transition-colors">
        How do I track my progress?
      </Link>
    </li>
  </ul>
</div>
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">Contact Support</h2>
                  <p className="text-muted-foreground">
                    Still have questions? Reach out to us anytime via email at <a href="mailto:aginaemmanuel6@gmail.com" className="text-primary">aginaemmanuel6@gmail.com</a> or call us at <a href="tel:+2349132062212" className="text-primary">(+234) 91-320-62212</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE (Optional visual) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/help-center.jpg"
                  alt="Help center illustration"
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

export default HelpPage;
