"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const providerConfig = {
  google: {
    iconSrc: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    alt: "Google logo",
    callbackUrl: "/dashboard",
  },
  github: {
    iconSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    alt: "GitHub logo",
    callbackUrl: "/dashboard",
  },
} as const;

type ProviderType = keyof typeof providerConfig;

type OAuthButtonProps = {
  provider: ProviderType;
};

export const OAuthButton = ({ provider }: OAuthButtonProps) => {
  const { iconSrc, alt, callbackUrl } = providerConfig[provider];

  return (
    <button
      onClick={() => signIn(provider, { callbackUrl })}
      aria-label={`Sign in with ${provider}`}
      className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
    >
      <Image src={iconSrc} width={25} height={25} alt={alt} />
    </button>
  );
};
