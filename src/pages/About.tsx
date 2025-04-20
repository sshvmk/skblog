
import { Header } from "@/components/header";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container max-w-3xl py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-lg mb-4">
              Hi, I'm Rohit Das, a software engineer and researcher focused on distributed systems,
              machine learning, and functional programming. I'm passionate about building scalable
              systems and exploring the theoretical foundations of computer science.
            </p>
            <p className="text-lg mb-4">
              Currently, I work at Tech Corp where I help build and scale distributed systems.
              Previously, I worked on machine learning infrastructure at AI Labs and contributed
              to several open-source projects.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Senior Software Engineer • Tech Corp</h3>
                <p className="text-muted-foreground">2021 - Present</p>
                <p>Building scalable distributed systems and cloud infrastructure</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Machine Learning Engineer • AI Labs</h3>
                <p className="text-muted-foreground">2018 - 2021</p>
                <p>Developed machine learning infrastructure and deployment pipelines</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Software Engineer • Startup Inc</h3>
                <p className="text-muted-foreground">2015 - 2018</p>
                <p>Built web applications and backend services</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-medium">MS in Computer Science</h3>
              <p className="text-muted-foreground">Stanford University • 2013-2015</p>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">BS in Computer Science</h3>
              <p className="text-muted-foreground">MIT • 2009-2013</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
