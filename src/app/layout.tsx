import { Montserrat } from 'next/font/google';
import '../styles/main.css';
import { Toaster } from '@/components/sonner';
import { TooltipProvider } from '@/components/tooltip';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={montserrat.className}>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster
        // toastOptions={{
        //   unstyled: true,
        //   classNames: {
        //     toast:
        //       'flex text-sm items-center w-[300px] rounded-lg p-4 gap-2 shadow-xl border',
        //     info: 'bg-dark text-white',
        //     error: 'bg-red bg-[#fecaca] text-red border-[#ef4444]',
        //     success: 'bg-[#ECFDF3] text-[#079455] border-[#22c55e]',
        //   },
        // }}
        />
      </body>
    </html>
  );
}
