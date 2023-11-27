'use client'
import React from "react";
import dynamic from 'next/dynamic';

const DisclosureProvider = dynamic(
  () => import('@discoxyz/selective-disclosure').then(mod => mod.DisclosureProvider),
  { ssr: false }
);

export default function DisclosureProviderWrapper({ children }: { children: React.ReactNode }) {
    const discoConfig = {
        projectKey: process.env.NEXT_PUBLIC_DISCO_API_KEY
    }

    return (
        (
            <DisclosureProvider config={discoConfig}>
                {children}
            </DisclosureProvider>
        )
    );
  };