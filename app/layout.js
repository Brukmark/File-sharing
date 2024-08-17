import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>
            {children}
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn></SignedIn> */}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
