import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My pp about title",
  description: "My app about page example",
  openGraph: {
    title: "It is open graph about title",
    description: "Open graph about description",
    url: "https://my-appp-nu.vercel.app/about/",
  },
};

function AboutPage() {
  return <div>AboutPage</div>;
}

export default AboutPage;
