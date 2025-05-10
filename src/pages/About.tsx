const About = () => {
  return (
    <>
      <main className="container max-w-3xl py-4">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-cyan-500">About Me</h1>
        
        <div className="space-y-8">
          <section>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <img src='/cat.jpeg' width='200' className="rounded-lg flex-shrink-0"></img>
              {/* <p className="text-lg text-center md:text-left"> */}
              <p className="text-lg text-left">
                Hi, I'm Shivam Kushwaha, an engineer, tech optimist, wanderer and writer. My interests lies in <b>ML/AI, deeptech, financial markets, music, poetry and philosophy</b>. I love nature a lot so I travel whenever I can. I look forward to seeing trees and rivers.
                <br/>Currently, my work includes data analysis and ML modelling for PL products. 
              </p>
            </div>
            <p className="text-lg mb-3">
              
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border/50 pb-2 mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Data and ML Engineer • Paytm</h3>
                <p className="text-muted-foreground">2024 - Present</p>
                <p className="text-sm">Analyzing data and working on TTS models at large scale.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Machine Learning Intern • NSUT Central AI Lab</h3>
                <p className="text-muted-foreground">2022 - 2024</p>
                <p className="text-sm">Worked on CNN</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border/50 pb-2 mb-4">Skills</h2>
            <div className="mt-1">
              <h3 className="text-lg font-extrasmall"><i>Whatever it takes to get stuff done</i></h3>
              {/* <p className="text-muted-foreground">NSUT, Delhi • 2019-2023</p> */}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight uppercase border-b border-border/50 pb-2 mb-4">Education</h2>
            <div className="mt-2">
              <h3 className="text-lg font-medium">BTech</h3>
              <p className="text-muted-foreground">NSUT, Delhi • 2019-2023</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
