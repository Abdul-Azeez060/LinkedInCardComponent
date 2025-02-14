"use client";

interface Avatar {
  imageUrl?: string;
  profileUrl?: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

const AvatarCircles = ({ className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div
      className={cn(
        "z-10 flex -space-x-2 js:-space-x-2 md:-space-x-3 rtl:space-x-reverse",
        className
      )}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer">
          <img
            key={index}
            className="h-5 w-5 js:h-7 js:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full border-2 border-white dark:border-gray-800"
            src={url.imageUrl as string}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
    </div>
  );
};

export default AvatarCircles;

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
