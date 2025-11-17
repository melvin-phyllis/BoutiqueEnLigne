import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Votre backoffice ",
  description: "",
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
