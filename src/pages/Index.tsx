import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import Header from "@/components/samarth/Header";
import InputConsole from "@/components/samarth/InputConsole";
import OutputArea from "@/components/samarth/OutputArea";
import SOSButton from "@/components/samarth/SOSButton";
import FAQSection from "@/components/samarth/FAQSection";

const Index = () => {
  return (
    <AccessibilityProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="container mx-auto flex-1 px-4 py-6 md:py-10">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Welcome */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Welcome to <span className="text-primary">SamarthVaani</span>
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Your AI-powered assistant for discovering schemes, understanding rights, and generating applications.
              </p>
            </section>

            <InputConsole />
            <OutputArea />
            <FAQSection />
          </div>
        </main>
        <SOSButton />
      </div>
    </AccessibilityProvider>
  );
};

export default Index;
