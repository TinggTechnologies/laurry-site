import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent } from '../components/ui/Card';
import './About.css';

export default function About() {
  return (
    <PageLayout>
      <div className="about-page">
        <div className="about-container">
          <div className="page-header">
            <h1 className="page-title">About Me</h1>
            <p className="page-subtitle">
              Passionate about transforming data into meaningful insights
            </p>
          </div>

          <div className="about-content">
            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">Professional Summary</h2>
                <p className="content-text">
                  Detail-oriented and results-driven Data Analyst with a strong background in
                  pharmaceutical technology and a passion for deriving insights that inform business
                  strategy and financial literacy.
                </p>
                <p className="content-text">
                  Experienced in leveraging Excel, SQL, Power BI, and Python to analyze data, 
                  design dashboards, and drive data-backed decisions. Strong communicator with a 
                  multi-disciplinary edge, spanning business operations, content creation, and 
                  community engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">Background</h2>
                <p className="content-text">
                  With a Higher National Diploma in Pharmaceutical Technology from Moshood Abiola 
                  Polytechnic Abeokuta (2024) and a National Diploma with Distinction from Edo State 
                  Polytechnic Usen (2021), I bring a unique analytical perspective to data analysis.
                </p>
                <p className="content-text">
                  My pharmaceutical background has equipped me with meticulous attention to detail, 
                  quality assessment skills, and a systematic approach to problem-solving—all essential 
                  qualities for effective data analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">What I Bring</h2>
                <ul className="content-list">
                  <li>Strong analytical and problem-solving abilities</li>
                  <li>Proficiency in data visualization and storytelling</li>
                  <li>Experience with business intelligence tools</li>
                  <li>Excellent communication and presentation skills</li>
                  <li>Ability to translate complex data into actionable insights</li>
                  <li>Commitment to continuous learning and professional development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="about-card">
              <CardContent>
                <h2 className="content-heading">Languages</h2>
                <div className="language-item">
                  <span className="language-name">English</span>
                  <span className="language-level">Advanced (Professional Proficiency)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

