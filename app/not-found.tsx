'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
      <h2 className="text-2xl font-display mb-6 text-center">Oops! This page has wandered off.</h2>
      <p className="text-center mb-8 text-muted-foreground max-w-md">
        The page you're looking for doesn't seem to exist. It might have been moved or deleted.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-green-600 transition-colors"
        >
          Go Home
        </Link>
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}