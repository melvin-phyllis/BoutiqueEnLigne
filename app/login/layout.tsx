import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connectez vous ",
  description: "Connexion",
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
