import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";

export const metadata = {
  title: {
    default: "Toram – Next.js Static Site Generator",
    template: "%s | Toram Wiki",
  },
};

const navbar = (
  <Navbar
    logo={<b>Toram Wiki</b>}
    projectLink="https://github.com/teerakanotk/toram"
  />
);
const footer = (
  <Footer>
    <p className="mt-6 text-xs">© {new Date().getFullYear()} Toram Wiki.</p>
  </Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/teerakanokt/toram/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
