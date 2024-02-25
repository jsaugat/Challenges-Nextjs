"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The music school transformed my passion for music into a lifelong journey. The instructors are phenomenal!",
    name: "Alice Johnson",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "I can't express how grateful I am for the excellent guidance and support I received. The school is a musical haven!",
    name: "Bob Smith",
    title: "Guitar Virtuoso",
  },
  {
    quote:
      "The music curriculum is diverse and engaging. I've learned so much about various music genres. Highly recommended!",
    name: "Emma Davis",
    title: "Aspiring Vocalist",
  },
  {
    quote:
      "The school's atmosphere fosters creativity and collaboration. It's a place where musical dreams come to life!",
    name: "Daniel Brown",
    title: "Drum Enthusiast",
  },
  {
    quote:
      "I never thought learning music could be this enjoyable. The school's approach makes it a joy to attend classes!",
    name: "Grace Wilson",
    title: "Flute Aficionado",
  },
];

export default function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
