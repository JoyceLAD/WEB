import ClientOnly from "@/components/ClientOnly";
import ToastContainerBar from "@/components/ToastContainerBar";
import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";
import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import Banner from "@/components/Banner";
export const metadata = {
  title: "Nhóm 16",
  description: "Web đọc truyện tranh",
  icons: "https://th.bing.com/th/id/R.b1fcde4824661c9b4d7f7b3083371fa2?rik=JvzQgjmrNOcYJw&pid=ImgRaw&r=0",
};

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
        <div>{children}</div>
      </body>
    </html>
  );
}
