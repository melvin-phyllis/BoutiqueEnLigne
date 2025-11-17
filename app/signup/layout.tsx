import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creez votre compte ",
  description: "inscrivez vous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
      </>
  );
}
