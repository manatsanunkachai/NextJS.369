import "./globals.css";
import StoreProvider from "@/app/StoreProvider";

export const metadata = {
  title: "Game Backlog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

