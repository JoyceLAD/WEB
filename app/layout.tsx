import ClientOnly from "@/components/ClientOnly";
import ToastContainerBar from "@/components/ToastContainerBar";
import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";
import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import Banner from "@/components/Banner";
const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastContainerBar />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
