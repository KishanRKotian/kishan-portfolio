import { useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Certifications = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      imageUrl: "/placeholder-cert.jpg", // Replace with actual certificate image
    },
    {
      id: 2,
      title: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      imageUrl: "/placeholder-cert.jpg", // Replace with actual certificate image
    },
    {
      id: 3,
      title: "Python Programming Certification",
      issuer: "Python Institute",
      imageUrl: "/placeholder-cert.jpg", // Replace with actual certificate image
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
              onClick={() => window.close()}
              className="hover:bg-secondary"
            >
              Close Window
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
                  <div className="w-full max-w-2xl aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Award className="h-16 w-16 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-muted-foreground">Certificate Image</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          {currentCert.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {currentCert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>
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

        {/* Instructions */}
        <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
          <h3 className="font-semibold mb-2">Add Your Certificates</h3>
          <p className="text-muted-foreground text-sm">
            Upload your certificate images to the public folder and update the imageUrl paths in the certificates array.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Certifications;