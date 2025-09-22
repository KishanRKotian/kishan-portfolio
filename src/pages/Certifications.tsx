import { useState } from "react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Award, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2023-09-15",
      expiryDate: "2026-09-15",
      credentialId: "AWS-SAA-2023-001",
      description: "Demonstrates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      imageUrl: "/placeholder-cert.jpg", // Replace with actual certificate image
      verificationUrl: "https://aws.amazon.com/verification/credentials",
      status: "Active"
    },
    {
      id: 2,
      title: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      issueDate: "2023-06-10",
      expiryDate: "2025-06-10",
      credentialId: "CSM-2023-12345",
      description: "Validates knowledge of Scrum framework and ability to lead agile development teams effectively.",
      skills: ["Agile Methodology", "Team Leadership", "Project Management", "Scrum Framework"],
      imageUrl: "/placeholder-cert.jpg", // Replace with actual certificate image
      verificationUrl: "https://www.scrumalliance.org/community/profile/",
      status: "Active"
    },
    {
      id: 3,
      title: "Python Programming Certification",
      issuer: "Python Institute",
      issueDate: "2023-03-20",
      expiryDate: "2026-03-20",
      credentialId: "PCAP-31-03-2023",
      description: "Comprehensive certification covering Python programming fundamentals and advanced concepts.",
      skills: ["Python", "Object-Oriented Programming", "Data Structures", "Algorithms"],
      imageUrl: "/placeholder-cert.jpg", // Replace with actual certificate image
      verificationUrl: "https://pythoninstitute.org/certification/",
      status: "Active"
    }
  ];

  const currentCert = certificates[currentCertIndex];

  const nextCertificate = () => {
    setCurrentCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const isExpiring = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(today.getMonth() + 3);
    return expiry <= threeMonthsFromNow && expiry > today;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{currentCert.title}</CardTitle>
                  <p className="text-lg font-medium text-primary">{currentCert.issuer}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Issued: {formatDate(currentCert.issueDate)}
                    </div>
                    {currentCert.expiryDate && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Expires: {formatDate(currentCert.expiryDate)}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge
                    variant={
                      currentCert.status === 'Active'
                        ? isExpiring(currentCert.expiryDate)
                          ? 'secondary'
                          : 'default'
                        : 'secondary'
                    }
                    className="flex items-center gap-1"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {currentCert.status}
                    {isExpiring(currentCert.expiryDate) && ' (Expiring Soon)'}
                  </Badge>
                  <p className="text-xs text-muted-foreground">
                    ID: {currentCert.credentialId}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Certificate Image Placeholder */}
                <div className="space-y-4">
                  <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Award className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground font-medium">Certificate Image</p>
                      <p className="text-sm text-muted-foreground">
                        {currentCert.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Verify
                    </Button>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentCert.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Skills Demonstrated</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentCert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {currentCert.verificationUrl && (
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Verification</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Verify this credential at:
                      </p>
                      <a
                        href={currentCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm break-all"
                      >
                        {currentCert.verificationUrl}
                      </a>
                    </div>
                  )}
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
            Replace the sample data in the certificates array with your actual certifications. 
            Upload certificate images to the public folder and update the imageUrl paths accordingly.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Certifications;