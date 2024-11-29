const servicesData = {
    title: "My Services",
    services: [
        {
            name: "Web Dev",
            description:
                "I can provide any ",
            link: "#"
        },
        {
            name: "App Development",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid sapiente minima dolorem fuga reprehenderit quo unde blanditiis nobis sed, velit perferendis doloremque at, soluta cumque tempore! Magnam, repudiandae rem?",
            link: "#"
        },
        {
            name: "UI/UX Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid sapiente minima dolorem fuga reprehenderit quo unde blanditiis nobis sed, velit perferendis doloremque at, soluta cumque tempore! Magnam, repudiandae rem?",
            link: "#"
        }
    ]
};

const servicesTitle = document.getElementById("servicesTitle");
const servicesList = document.getElementById("servicesList");

servicesTitle.textContent = servicesData.title;

servicesData.services.forEach(service => {
    const serviceDiv = document.createElement("div");

    const serviceTitle = document.createElement("h2");
    serviceTitle.textContent = service.name;

    const serviceDescription = document.createElement("p");
    serviceDescription.textContent = service.description;

    const serviceLink = document.createElement("a");
    serviceLink.href = service.link;
    serviceLink.textContent = "Learn More";

    serviceDiv.appendChild(serviceTitle);
    serviceDiv.appendChild(serviceDescription);
    serviceDiv.appendChild(serviceLink);

    servicesList.appendChild(serviceDiv);
});
