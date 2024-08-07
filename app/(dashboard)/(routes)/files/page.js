"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useClerk, useSignIn } from '@clerk/nextjs';

function Files() {
  const { signIn } = useSignIn();
  const { isSignedIn, isLoading } = useClerk(); // `useClerk` or use `useUser()` depending on Clerk's version
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      // Show loading state while checking authentication status
      return;
    }

    if (!isSignedIn) {
      // Trigger sign-in modal if user is not authenticated
      signIn.open(); 
    } else {
      // Redirect to another page if needed
      router.push('/some-other-page');
    }
  }, [isSignedIn, isLoading, router, signIn]);

  return (
    <div className="text-black">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Welcome to the Files Page!</div>
      )}
    </div>
  );
}

export default Files;
