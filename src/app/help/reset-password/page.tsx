import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Reset Your Password | Help Center | emmyflex.ai",
};

const ResetPasswordPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            How to <span className="text-primary">Reset Your Password</span>
          </h1>
          <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 mb-8"></div>

          <ol className="list-decimal list-inside space-y-4 text-muted-foreground text-lg">
            <li>Go to the login page of emmyflex.ai.</li>
            <li>Click on the <strong>"Forgot Password?"</strong> link.</li>
            <li>Enter the email address associated with your account.</li>
            <li>Check your inbox for a password reset link.</li>
            <li>Click the link and follow the instructions to set a new password.</li>
          </ol>

          <p className="text-sm text-muted-foreground mt-6">If you need additional help, please contact us at <a href="mailto:aginaemmanuel6@gmail.com" className="text-primary hover:underline">aginaemmanuel6@gmail.com</a>.</p>
        </div>
      </section>
    </div>
  );
};

export default ResetPasswordPage;
