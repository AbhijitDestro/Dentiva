import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminRedirectPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect("/sign-in");
    return null;
  }
  
  // Check if user is admin by comparing email with admin email from env
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  const userEmail = user.emailAddresses?.[0]?.emailAddress;
  
  if (userEmail && adminEmail && userEmail === adminEmail) {
    redirect("/admin");
  } else {
    redirect("/dashboard");
  }
  
  return null;
}