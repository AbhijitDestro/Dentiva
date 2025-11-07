import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 dark:from-primary/30 dark:via-primary/20 dark:to-primary/10">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Dentiva Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back to Dentiva
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Sign in to access your dental dashboard
          </p>
        </div>
        
        <div className="bg-white dark:bg-primary/10 rounded-lg shadow-lg p-6">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200",
                footerActionLink: "text-primary hover:text-primary/80 font-medium",
                formFieldInput: "rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700",
                card: "shadow-none",
                headerTitle: "text-gray-900 dark:text-white",
                headerSubtitle: "text-gray-600 dark:text-gray-300",
              },
              layout: {
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "blockButton",
                helpPageUrl: "/help",
                privacyPageUrl: "/privacy",
                termsPageUrl: "/terms",
              },
              variables: {
                colorPrimary: "#ea580c",
                colorBackground: "#ffffff",
                colorInputBackground: "#ffffff",
                colorText: "#000000",
                colorTextSecondary: "#6b7280",
              },
            }}
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            afterSignInUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}