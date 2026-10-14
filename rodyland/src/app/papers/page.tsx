'use client';

import Hero from "@/src/components/pages/papers/hero"
import PaperSection from '@/src/components/pages/papers/papers';
import DiscordWindow from '@/src/components/pages/papers/windows/discord';
import SocialsWindow from '@/src/components/pages/papers/windows/socials';
import StatusWindow from '@/src/components/pages/papers/windows/status';
import Profile from '@/src/components/pages/papers/profile';
import Me from '@/src/components/pages/papers/windows/me';

export default function Redirect() {

  return (
    <>
      <Profile/>
      <SocialsWindow/>
      <StatusWindow/>
      <Me/>
      <DiscordWindow/>
      <Hero/>
      <PaperSection/>
    </>
  );
}