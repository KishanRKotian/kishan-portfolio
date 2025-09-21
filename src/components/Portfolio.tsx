import { Mail, Linkedin, Code, Users, Target, Zap, ArrowRight, CheckCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/kishan-profile.jpg";

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50 animate-fade-in">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="font-semibold text-xl">Kishan R Kotian</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-muted-foreground hover:text-foreground transition-colors capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                  Hi, I'm <span className="gradient-text">Kishan R Kotian</span>
                </h1>
                <p className="text-2xl text-muted-foreground mb-6">
                  Software Engineer | Automotive HIL Validation & Automation
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experienced automotive engineer with 2+ years in HIL validation and automation. 
                  Passionate about problem-solving, debugging, and delivering quality-driven solutions 
                  through Agile methodologies and cross-functional collaboration.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="hero" onClick={() => scrollToSection('projects')}>
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="hero-outline" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Kishan R Kotian - Professional Profile"
                  className="rounded-2xl w-80 h-80 object-cover card-shadow hover-lift"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-2">
                  <span className="font-semibold">2+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated professional with a passion for automotive engineering and a commitment to continuous learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Career Goals & Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I thrive on tackling complex challenges in automotive validation and automation. 
                  My approach combines analytical thinking with collaborative problem-solving, 
                  always striving to deliver innovative solutions that drive efficiency and quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in Agile methodologies, I believe in continuous improvement, 
                  knowledge sharing, and building robust systems that stand the test of time.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: 'Problem Solving' },
                  { icon: Users, label: 'Team Collaboration' },
                  { icon: Zap, label: 'Innovation' },
                  { icon: CheckCircle, label: 'Quality Focus' }
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="card-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Engineering</h4>
                  <p className="text-primary font-medium">Information Science & Engineering</p>
                  <p className="text-muted-foreground">NMAM Institute of Technology, Nitte</p>
                  <p className="text-sm text-muted-foreground">2019 - 2023</p>
                </div>
                
                <div className="pt-4 border-t">
                  <h5 className="font-medium mb-2">Key Achievements</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Strong foundation in software engineering principles</li>
                    <li>• Specialized in automation and validation systems</li>
                    <li>• Project leadership and collaborative development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in automotive engineering
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="card-shadow hover-lift">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Software Engineer</CardTitle>
                    <p className="text-primary font-semibold text-lg">Alten Global Technologie Pvt Ltd.</p>
                    <p className="text-muted-foreground">September 2023 - Present</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Current</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Contributing to cutting-edge automotive validation and automation projects, 
                  specializing in HIL (Hardware-in-the-Loop) systems and test automation frameworks.
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Contributions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Automotive HIL Validation Systems',
                      'Test Automation Framework Development', 
                      'Agile Development Practices',
                      'Cross-functional Team Collaboration',
                      'Requirements Analysis & Documentation',
                      'Quality Assurance & Testing'
                    ].map((contribution) => (
                      <div key={contribution} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'CAPL', 'CANoe', 'Agile', 'HIL Systems', 'Test Automation'].map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Technical and professional competencies that drive results
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Skills */}
            <Card className="card-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Professional Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  'Requirement Analysis',
                  'Team Collaboration', 
                  'Problem Solving',
                  'Root Cause Analysis'
                ].map((skill) => (
                  <div key={skill} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                    <span className="font-medium">{skill}</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            {/* Technical Skills */}
            <Card className="card-shadow hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: 'Programming', skills: ['Python', 'CAPL'] },
                    { category: 'Tools & Platforms', skills: ['Dspace (Control desk & Automation desk)', 'CANoe', 'Can Analyzer'] },
                    { category: 'Testing & Validation', skills: ['Provetech', 'UDS', 'ETAS INCA'] },
                    { category: 'Methodologies', skills: ['IBM Jazz', 'Agile'] }
                  ].map(({ category, skills }) => (
                    <div key={category}>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Key contributions to automotive validation and automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Powertrain Systems Project */}
            <Card className="card-shadow hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Powertrain Systems Validation</CardTitle>
                <p className="text-muted-foreground">HIL Validation & Testing Framework</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive HIL validation system for powertrain components including 
                  requirement analysis, test execution, and automated defect tracking.
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Key Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• HIL validation and comprehensive testing</li>
                    <li>• Requirement analysis and documentation</li>
                    <li>• Automated test execution frameworks</li>
                    <li>• Defect tracking and reporting systems</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HIL Testing</Badge>
                  <Badge variant="outline">Validation</Badge>
                  <Badge variant="outline">Automation</Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* Motor Control Unit Project */}
            <Card className="card-shadow hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Motor Control Unit Automation</CardTitle>
                <p className="text-muted-foreground">Automated Testing & Analysis</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Advanced automation framework for Motor Control Unit testing with 
                  Python-based HIL scripts and comprehensive HSIT environment execution.
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Technical Contributions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Python-based automated HIL test scripts</li>
                    <li>• HSIT test environment execution</li>
                    <li>• Comprehensive defect reporting</li>
                    <li>• Root cause analysis and resolution</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">HSIT</Badge>
                  <Badge variant="outline">Test Scripts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Let's connect and discuss opportunities
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always interested in discussing new opportunities in automotive engineering, 
                  HIL validation, and automation. Feel free to reach out for collaborations or 
                  professional discussions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:kishanrkotian2001@gmail.com" className="text-primary hover:underline">
                      kishanrkotian2001@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="#" className="text-primary hover:underline">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background" 
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background" 
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background resize-none" 
                    placeholder="Your message here..."
                  />
                </div>
                <Button variant="hero" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container-custom">
          <div className="text-center">
            <p className="font-semibold text-lg mb-2">Kishan R Kotian</p>
            <p className="text-background/80 mb-4">Software Engineer | Automotive HIL Validation & Automation</p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;