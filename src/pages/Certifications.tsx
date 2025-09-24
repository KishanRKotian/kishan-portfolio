import { useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import generativeAiCert from "@/assets/generative-ai-certificate.png";

const Certifications = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      imageUrl: generativeAiCert,
    },
    {
      id: 2,
      title: "The Scrum Framework: A Beginner's Guide",
      issuer: "Stellantis",
      imageUrl: "/lovable-uploads/5bfb2992-4901-4e45-9639-dafaf6056903.png",
    },
    {
      id: 3,
      title: "Python Workshop",
      issuer: "NMAM Institute of Technology",
      imageUrl: "/lovable-uploads/dc33c85b-967b-43c2-ade1-364bd625f7bc.png",
    },
    {
      id: 4,
      title: "SQL",
      issuer: "Cognitive Class",
      imageUrl: "/lovable-uploads/1b3349d8-c466-47f7-bc11-cf04d071fc34.png",
    }
  ];

  const currentCert = certificates[currentCertIndex];

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold">My Certifications</h1>
            </div>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/")} 
              className="hover:bg-secondary"
            >
              Previous Window
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Navigation Counter */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Certificate {currentCertIndex + 1} of {certificates.length}
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {certificates.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentCertIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Certificate Display */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                {/* Certificate Title */}
                <div>
                  <h2 className="text-3xl font-bold mb-2">{currentCert.title}</h2>
                  <p className="text-xl text-primary font-medium">{currentCert.issuer}</p>
                </div>

                {/* Certificate Image */}
                <div className="flex justify-center">
                  <img 
                    src={currentCert.imageUrl} 
                    alt={`${currentCert.title} certificate from ${currentCert.issuer}`}
                    className="w-full max-w-2xl rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={prevCertificate}
            disabled={certificates.length <= 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <span className="text-sm text-muted-foreground px-4">
            {currentCertIndex + 1} of {certificates.length}
          </span>
          
          <Button
            variant="outline"
            onClick={nextCertificate}
            disabled={certificates.length <= 1}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Certifications;
