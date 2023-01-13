const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const projectsBtn = document.getElementById("projects-btn");
const contactBtn = document.getElementById("contact-btn");

const Home = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "home-container" }, /*#__PURE__*/
    React.createElement("div", { className: "home-header" }, /*#__PURE__*/
    React.createElement("h1", { className: "home-title" }, "Welcome to Centre for Entrepreneurship and Leadership"), /*#__PURE__*/
    React.createElement("p", { className: "home-subtitle" }, "Innovating the future, one entrepreneur at a time")), /*#__PURE__*/

    React.createElement("div", { className: "home-img" }, /*#__PURE__*/
    React.createElement("img", { src: "https://www.edufever.com/wp-content/uploads/2019/02/BITS-Pilani-1.jpg", alt: "Entrepreneurship and Leadership", className: "home-img-content" }))));



};


const About = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "about-container" }, /*#__PURE__*/
    React.createElement("h1", { className: "about-title" }, "About Us"), /*#__PURE__*/
    React.createElement("div", { className: "about-content" }, /*#__PURE__*/
    React.createElement("p", null, "Center for Entrepreneurial Leadership (CEL) is a Center for Excellence at BITS Pilani, Pilani Campus.", /*#__PURE__*/
    React.createElement("br", null), "As the Entrepreneurship Cell of one of the premier institutes of the country, the prime focus of the organization is to provide an environment conducive to promoting the entrepreneurial spirit and related skills among not only the students of the college, but all across the nation.", /*#__PURE__*/
    React.createElement("br", null), "Through an amalgamation of various projects, we aspire to cater to the interests of a wide variety of people - ranging from students with an entrepreneurial bent to economically weaker sections in the nearby rural areas, as well as established startups in need of funding or mentorship."))));





};

const Projects = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("h1", { className: "projects-title" }, "Projects"), /*#__PURE__*/
    React.createElement("div", { className: "projects-list-container" }, /*#__PURE__*/
    React.createElement("div", { className: "project-item" }, "Conquest"), /*#__PURE__*/
    React.createElement("div", { className: "project-item" }, "SiS"), /*#__PURE__*/
    React.createElement("div", { className: "project-item" }, "RED"), /*#__PURE__*/
    React.createElement("div", { className: "project-item" }, "E-Week"))));



};

const Contact = () => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "contact-container" }, /*#__PURE__*/
    React.createElement("h1", { className: "contact-title" }, "Contact Us"), /*#__PURE__*/
    React.createElement("div", { className: "contact-content" }, /*#__PURE__*/
    React.createElement("p", null, "Email: ", /*#__PURE__*/
    React.createElement("a", { href: "mailto:f20190633@pilani.bits-pilani.ac.in" }, "f20190633@pilani.bits-pilani.ac.in"), " ", /*#__PURE__*/React.createElement("br", null), "Address: 1218, BITS Pilani ", /*#__PURE__*/
    React.createElement("br", null), "Vidyavihar, Pilani ", /*#__PURE__*/
    React.createElement("br", null), "Rajasthan | 333031 ", /*#__PURE__*/
    React.createElement("br", null)))));




};


const renderContent = component => {
  ReactDOM.render(component, document.getElementById("content"));
};

homeBtn.addEventListener("click", () => {
  renderContent( /*#__PURE__*/React.createElement(Home, null));
});

aboutBtn.addEventListener("click", () => {
  renderContent( /*#__PURE__*/React.createElement(About, null));
});

projectsBtn.addEventListener("click", () => {
  renderContent( /*#__PURE__*/React.createElement(Projects, null));
});

contactBtn.addEventListener("click", () => {
  renderContent( /*#__PURE__*/React.createElement(Contact, null));
});

renderContent( /*#__PURE__*/React.createElement(Home, null));