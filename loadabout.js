const aboutData = {
    profileImage: "images/user.png",
    aboutTitle: "About Me",
    aboutText: `
        Hello !!  I am Haarit Chavda a 20 year old enthusiast. I am interested in all the domains of computer science but have special interests for 
        crafting algorithms, machine learning and cyber sequirity. In this portfolio website i will be displaying some of my projects and works. I hope that 
        you will enjoy the work and feel free to leave any message at the end of the portfolio website.
    `,
    tabs: [
        {
            title: "Skills",
            content: [
                { name: "Python", description: "Pytorch, Pandas, sklearn, numpy and many more" },
                { name:"Machine Learning", description:"SVMs, NNs, CNNs, LSH, and many more"},
                { name: "C/C++", description: "Data Structures and Algorithms and text based games"},
                { name: "Web Dev", description: "MERN Full Stack + bootstrap + tailwindcss + typescript + appscript" },
                { name:"Systems",description:"Bug Bounty + Basic Pen-Testing (HTBs / VulnHub)"}
            ]
        },
        {
            title: "Experience",
            content: [
                { name: "Technical Officer (EC IITGN)", description: "Build web portal for automated voter-id generation. Automated ID-card generator "},
                { name: "Project Janus", description: "Creating molecules from SMILES representation using JANUS" },
            ]
        },
        {
            title: "Education",
            content: [
                { name: "BTech", description: "pursuing BTech  in CSE at IITGN" },
                { name: "High School", description: "Gyanmanjari Vidhyapeeth ,Bhavnagar,Gujarat" },
                { name: "Primary School", description: "FIA, Dhandhuka,Gujarat"}
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
