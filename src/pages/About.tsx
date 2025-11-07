const About = () => {
  return (
    <>
      <main className="container max-w-xl py-6">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-cyan-500">About Me</h1>
        
        <div className="space-y-8">
          <section>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <img 
                src='/cat.jpeg' 
                width='200' 
                height='200'
                className="rounded-lg flex-shrink-0"
                loading="lazy"
                decoding="async"
                alt="Profile"
              />
              {/* <p className="text-lg text-center md:text-left"> */}
              <p className="text-lg text-left">
                Hi, 
                <br></br>
                I'm Shivam Kushwaha, an engineer, tech optimist, wanderer and writer. My interests lies in <b>ML/AI, deeptech, math, financial markets, music, poetry, philosophy, history, architecture, and more</b>. 
                <br></br>
                I love nature a lot so I travel whenever I can. I always look forward to seeing trees, rivers, and mountains.
                <br/>
                {/* Currently, my work includes data analysis and ML modelling for Lending products at Paytm.  */}
              </p>
            </div>
            <p className="text-lg mb-4">
              
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border/50 pb-2 mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Data and ML Engineer • Paytm</h3>
                <p className="text-muted-foreground">Feb 2024 - Present</p>
                <p className="text-sm">Currently, I am building credit risk model, underwriting model and recommendation engines. </p>
                <p className="text-sm">Previously, I have worked on NLP pipeline solutioning for voice bots.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Data Scientist • Anahit Pvt Ltd (Fintech startup)</h3>
                <p className="text-muted-foreground">July 2023 - Dec 2023</p>
                <p className="text-sm">Major work was to study and build macro indicators such as recession indicator, global liquidity indicator, etc for financial markets. 
                  Also worked on finding correlation and catching trends across all major asset classes. 
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Machine Learning Intern • NSUT Central AI Lab</h3>
                <p className="text-muted-foreground">2022 - 2024</p>
                <p className="text-sm">Majorly worked on CNN and RNN models.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border/50 pb-2 mb-4">Skills</h2>
            <div className="mt-1">
              <h4 className="text-lg font-extrasmall"><i>Whatever it takes to get stuff done</i></h4>
              {/* <p className="text-muted-foreground">NSUT, Delhi • 2019-2023</p> */}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border/50 pb-2 mb-4">Education</h2>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Bachelor of Technology</h3>
              <p className="text-muted-foreground">NSUT, Delhi • 2019-2023</p>
              <p className="text-sm">First class with distinction. Top scorer in 4 semesters. Top 10 overall.</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
