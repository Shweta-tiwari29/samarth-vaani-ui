import { Volume2, FileText, Search, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sampleSchemes = [
  {
    title: "UDID – Unique Disability ID",
    description: "Register for a unique disability identity card valid across India.",
    tag: "Documentation",
  },
  {
    title: "Sugamya Bharat Abhiyaan",
    description: "Accessibility initiative ensuring barrier-free built environments.",
    tag: "Accessibility",
  },
  {
    title: "Deendayal Disabled Rehabilitation Scheme",
    description: "Financial assistance for rehabilitation of persons with disabilities.",
    tag: "Financial Aid",
  },
];

const OutputArea = () => {
  return (
    <div className="space-y-6">
      {/* Scheme Finder */}
      <section aria-labelledby="scheme-heading">
        <div className="mb-3 flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          <h2 id="scheme-heading" className="text-lg font-bold text-foreground">Smart Scheme Finder</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sampleSchemes.map((scheme) => (
            <Card key={scheme.title} className="border-border hover:border-primary/40 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base font-semibold leading-snug">{scheme.title}</CardTitle>
                  <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {scheme.tag}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">{scheme.description}</p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-1 text-xs" aria-label={`Read aloud: ${scheme.title}`}>
                    <Volume2 className="h-3.5 w-3.5" /> Read Aloud
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1 text-xs">
                    Learn More <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Simple Explanation */}
      <section aria-labelledby="explain-heading">
        <div className="mb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 id="explain-heading" className="text-lg font-bold text-foreground">Simple Explanation</h2>
        </div>
        <Card className="border-border">
          <CardContent className="pt-5">
            <div className="flex items-start justify-between gap-2">
              <ul className="list-inside list-disc space-y-2 text-sm text-foreground">
                <li>You have the <strong>right to free education</strong> up to 18 years under the RPwD Act, 2016.</li>
                <li>Government buildings must be <strong>wheelchair accessible</strong>.</li>
                <li><strong>4% reservation</strong> in government jobs for persons with benchmark disabilities.</li>
                <li>You can avail <strong>income tax benefits</strong> under Section 80U.</li>
              </ul>
              <Button variant="outline" size="icon" className="shrink-0" aria-label="Read explanation aloud">
                <Volume2 className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Application Generator */}
      <section aria-labelledby="app-gen-heading">
        <div className="mb-3 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h2 id="app-gen-heading" className="text-lg font-bold text-foreground">Application Generator</h2>
        </div>
        <Card className="border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
          <CardContent className="flex items-center gap-4 py-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <FileText className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Generate Application</h3>
              <p className="text-sm text-muted-foreground">
                Create an official application for schemes, rights claims, or government requests.
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default OutputArea;
