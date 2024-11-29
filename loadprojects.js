const servicesData = {
    title: "My Projects",
    services: [
        {
            name: "Collaborative Code Editor",
            description:
                "Technology Used: reactjs,mongodb,sockets. This projects aims at cloning the functionality like google docs but in a code editor as well as normal doc editor. It gives real time sync for multiple users allowing to collaborate and write code simultaneously",
            link: "#"
        },
        {
            name: "Spotify Clone (CSS+HTML)",
            description:
                "Technology Used: reactjs,mongodb,sockets. This projects aims at cloning the functionality like google docs but in a code editor as well as normal doc editor. It gives real time sync for multiple users allowing to collaborate and write code simultaneously",
            link: "#"
        },
        {
            name: "WanderLust",
            description:
                "Technology Used: reactjs,mongodb,sockets. This projects aims at cloning the functionality like google docs but in a code editor as well as normal doc editor. It gives real time sync for multiple users allowing to collaborate and write code simultaneously",
            link: "#"
        },
        {
            name: "Data Structures in C",
            description:
                "This is a personal project where i will implrmnt all the data structures and basic operations in c. The work is under progress and many more algos and data structures will be incorporated in the github repo",
            link: "#"
        },
        {
            name: "JANUS",
            description:
                "This project was done under the guidance of prof. Anirban Mondal at IITGN. The task was to use the JANUS library for inverse molecular desing and obtaining molecules with required properties. Filtering the data and customizing the JANUS was the major task",
            link: "#"
        },
        {
            name: "Human Activity Recognition",
            description:
            "This was a group project and the aim was to classify the activity based on the accelerometer data provided. We implemented teh decision tree from scratch and compared its performance with sklearn prebuilts. WE also did data analysis",
            link:"#"
        },
        {
            name: "Image Compression",
            description:
            "This was a group project and the aim was to classify the activity based on the accelerometer data provided. We implemented teh decision tree from scratch and compared its performance with sklearn prebuilts. WE also did data analysis",
            link:"#"
        },
        {
            name: "Image CLassification",
            description:
            "This was a group project and the aim was to classify the activity based on the accelerometer data provided. We implemented teh decision tree from scratch and compared its performance with sklearn prebuilts. WE also did data analysis",
            link:"#"
        },
        {
            name: "Next Word Predictor",
            description:
            "This was a group project and the aim was to classify the activity based on the accelerometer data provided. We implemented teh decision tree from scratch and compared its performance with sklearn prebuilts. WE also did data analysis",
            link:"#"
        },
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
