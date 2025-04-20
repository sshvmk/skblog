import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container max-w-3xl py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>
        
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-4 mb-4">
              <img src='/cat.jpeg' width='200' className="rounded-lg"></img>
              <p className="text-lg">
                Hi, I'm Shivam Kushwaha, an engineer, tech optimist, wanderer and writer. Currently, I work at Tech Corp where I help build and scale distributed systems.
              Previously, I worked on machine learning infrastructure at AI Labs and contributed
              to several open-source projects.
              </p>
            </div>
            <p className="text-lg mb-4">
              {/* Currently, I work at Tech Corp where I help build and scale distributed systems.
              Previously, I worked on machine learning infrastructure at AI Labs and contributed
              to several open-source projects. */}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Data and ML Engineer • Paytm</h3>
                <p className="text-muted-foreground">2024 - Present</p>
                <p>Analyzing data and working on TTS models at large scale.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Machine Learning Intern • NSUT Central AI Lab</h3>
                <p className="text-muted-foreground">2022 - 2024</p>
                <p>Worked on CNN </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Education</h2>
            <div className="mt-2">
              <h3 className="text-lg font-medium">BTech - Mechatronics (MechEngg, Robotics, AI)</h3>
              <p className="text-muted-foreground">NSUT, Delhi • 2019-2023</p>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default About;
