var currentYear = new Date().getFullYear();

const aboutData = {
    profileImage: "images/user.jpg",
    // profileImage: "images/user.jpg",
    aboutTitle: "About Me",
    aboutText: `
        Hello !!  I am Haarit Chavda, a ${currentYear-2005} year-old enthusiast. I am interested in all computer science domains but have a particular interest in crafting and learning algorithms, machine learning, and cybersecurity/systems. I will display some of my projects and works on this portfolio website. I hope you will enjoy the work, and feel free to leave a message at the end of the portfolio website.
    `,
    tabs: [
        {
            title: "Skills",
            content: [
                { name: "Python", description: "Pytorch, Pandas, sklearn, numpy and many more" },
                { name:"Machine Learning", description:"SVMs, NNs, CNNs, LSH, and many more"},
                { name: "C/C++", description: "Data Structures and Algorithms, text based games"},
                { name: "Web Dev", description: "MERN Full Stack + bootstrap + tailwindcss" },
                { name:"Systems",description:"Bug Bounty + Basic Pen-Testing (HTBs / VulnHub)"}
            ]
        },
        {
            title: "Experience",
            content: [
                { name: "Technical Officer (EC IITGN)", description: "For term 2023-24"},
                { name: "Project Janus", description: "Under Guidance of prof.Anirban Mondal in my 3rd Semester"},
            ]
        },
        {
            title: "Education",
            content: [
                { name: "Engineering - BTech", description: "pursuing BTech  in CSE at IITGN (BTech 27)" },
                { name: "Sec. & High Sec. Education", description: "Gyanmanjari Vidhyapeeth, Bhavnagar, Gujarat" },
                { name: "Primary Education", description: "FIA, Dhandhuka,Gujarat"}
                // { name: "Certifications", description: "Various online and offline courses" }
            ]
        }
    ]
};

const profileImage = document.getElementById("profileImage");
const aboutTitle = document.getElementById("aboutTitle");
const aboutText = document.getElementById("abouttext");
const tabTitles = document.getElementById("tabTitles");
const tabContents = document.getElementById("tabContents");

profileImage.src = aboutData.profileImage;
profileImage.style.height = "800px";
aboutTitle.textContent = aboutData.aboutTitle;
aboutText.textContent = aboutData.aboutText;

aboutData.tabs.forEach((tab, index) => {
    const tabLink = document.createElement("p");
    tabLink.textContent = tab.title;
    tabLink.className = `tab-links ${index === 0 ? "active-link" : ""}`;
    tabLink.onclick = () => openTab(tab.title.toLowerCase());
    tabTitles.appendChild(tabLink);

    const tabContent = document.createElement("div");
    tabContent.className = `tab-contents ${index === 0 ? "active-tab" : ""}`;
    tabContent.id = tab.title.toLowerCase();

    const ul = document.createElement("ul");
    tab.content.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${item.name}</span> <br> ${item.description}`;
        ul.appendChild(li);
    });

    tabContent.appendChild(ul);
    tabContents.appendChild(tabContent);
});

function openTab(tabId) {
    document.querySelectorAll(".tab-contents").forEach(tc => tc.classList.remove("active-tab"));
    document.querySelectorAll(".tab-links").forEach(tl => tl.classList.remove("active-link"));

    document.getElementById(tabId).classList.add("active-tab");
    document.querySelector(`.tab-links:nth-child(${aboutData.tabs.findIndex(t => t.title.toLowerCase() === tabId) + 1})`).classList.add("active-link");
}
