const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const contactBtn = document.getElementById("contact-btn");

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Welcome to Centre for Entrepreneurship and Leadership</h1>
        <p className="home-subtitle">Innovating the future, one entrepreneur at a time</p>
      </div>
      <div className="home-img">
        <img src="https://www.edufever.com/wp-content/uploads/2019/02/BITS-Pilani-1.jpg" alt="Entrepreneurship and Leadership" className="home-img-content" />
      </div>
    </div>
  );
};


const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p>
          Center for Entrepreneurial Leadership (CEL) is a Center for Excellence at BITS Pilani, Pilani Campus.<br />
          As the Entrepreneurship Cell of one of the premier institutes of the country, the prime focus of the organization is to provide an environment conducive to promoting the entrepreneurial spirit and related skills among not only the students of the college, but all across the nation.<br />
          Through an amalgamation of various projects, we aspire to cater to the interests of a wide variety of people - ranging from students with an entrepreneurial bent to economically weaker sections in the nearby rural areas, as well as established startups in need of funding or mentorship.
        </p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list-container">
        <div className="project-item">Conquest</div>
        <div className="project-item">SiS</div>
        <div className="project-item">RED</div>
        <div className="project-item">E-Week</div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <p>
          Email: <a href="mailto:f20190633@pilani.bits-pilani.ac.in">f20190633@pilani.bits-pilani.ac.in</a> <br />
          Address: 1218, BITS Pilani <br />
          Vidyavihar, Pilani <br />
          Rajasthan | 333031 <br />
        </p>
      </div>
    </div>
  );
};


const renderContent = (component) => {
  ReactDOM.render(component, document.getElementById("content"));
};

homeBtn.addEventListener("click", () => {
  renderContent(<Home />);
});

aboutBtn.addEventListener("click", () => {
  renderContent(<About />);
});

projectsBtn.addEventListener("click", () => {
  renderContent(<Projects />);
});

contactBtn.addEventListener("click", () => {
  renderContent(<Contact />);
});

renderContent(<Home />);

