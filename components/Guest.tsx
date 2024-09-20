
import Hero from "./Hero";
import Features from "./Features";
import PricingSection from "./Pricing";
import Testimonials from "./Testimonial";

type Props = {

}
export const Guest = ({ }: Props) => {
    return (

        <main>
            <Hero />
            <Features />
            <PricingSection />
            <Testimonials />
        </main>
    )
}