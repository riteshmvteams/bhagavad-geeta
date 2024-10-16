import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import DrawerProvider from "@/components/providers/drawer-provider";
import Drawer from "@/components/ui/drawer";

export default function MainAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DrawerProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </DrawerProvider>
  );
}
