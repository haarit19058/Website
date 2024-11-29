const portfolioData = {
    title: "My Work",
    works: [
        {
            image: "images/work-1.png",
            alt: "Work 1",
            title: "Social Media App",
            description: "Lorem ipsum dolor sit amet consecte"
        },
        {
            image: "images/work-2.png",
            alt: "Work 2",
            title: "E-commerce Platform",
            description: "Lorem ipsum dolor sit amet cons"
        },
        {
            image: "images/work-3.png",
            alt: "Work 3",
            title: "Portfolio Website",
            description: "Lorem ipsum dolor sit amet cons"
        }
    ],
    seeMoreLink: "#"
};

const portfolioTitle = document.getElementById("portfolioTitle");
const workList = document.getElementById("workList");
const seeMoreLink = document.getElementById("seeMoreLink");

portfolioTitle.textContent = portfolioData.title;

portfolioData.works.forEach(work => {
    const workDiv = document.createElement("div");
    workDiv.className = "work";

    const img = document.createElement("img");
    img.src = work.image;
    img.alt = work.alt;

    const layerDiv = document.createElement("div");
    layerDiv.className = "layer";

    const h3 = document.createElement("h3");
    h3.textContent = work.title;

    const p = document.createElement("p");
    p.textContent = work.description;

    layerDiv.appendChild(h3);
    layerDiv.appendChild(p);
    workDiv.appendChild(img);
    workDiv.appendChild(layerDiv);

    workList.appendChild(workDiv);
});

seeMoreLink.href = portfolioData.seeMoreLink;
