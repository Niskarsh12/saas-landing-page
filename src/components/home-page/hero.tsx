// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/echolingo1.jpg";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://getwaitlist.com/waitlist/20772">
            Join the EchoLingo Waitlist<ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
            Unlock Your Language Potential with EchoLingo!
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
            Your personalized learning assistant for mastering languages effortlessly.  
              Get ready to learn Japanese, French, Spanish, and more with tailored lessons and resources.
           
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
