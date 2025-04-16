import { Lamp } from "@/components/ui/lamp";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen">
            <Lamp />
            <div className="mt-8 flex flex-col items-center justify-center">
                <FeaturesSectionWithHoverEffects />
            </div>
        </section>
    );
}
