// Layout
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Mic, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Natural Voice Interaction",
    href: "/natural-voice", // Link to the detailed page for this feature
    description:
      "Experience seamless learning with our natural voice feature, allowing you to engage in real conversations, practice pronunciation, and receive instant feedback.",
    cta: "Learn More",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Personalized Learning Paths",
    href: "/personalized-paths",
    description:
      "Tailor your learning experience with customized paths that adapt to your skills and goals, ensuring effective progress.",
    cta: "Learn More",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Interactive Lessons",
    href: "/interactive-lessons",
    description:
      "Engage with interactive lessons that keep you motivated and help reinforce your knowledge through practical applications.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Community Support",
    href: "/community-support",
    description:
      "Join a vibrant community of learners and instructors, providing support  as you embark on your language journey.",
    cta: "Learn More",
  },
];

const FeatureSet = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Elevate Your Language Learning Experience
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Innovative features designed for effective and engaging learning
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
          <div>
            {singleFeatureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              ),
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureSet;
