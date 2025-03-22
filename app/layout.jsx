import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "@/app/globals.css";

export const metadata = {
  title: {
    default: "Toram Wiki",
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
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/teerakanotk/toram/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
