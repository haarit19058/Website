const servicesData = {
    title: "My Projects",
    services: [
        // {
        //     name: "LeetCode + Codeforces + CodeChef",
        //     description:
        //         "This is a personal project where i will implrmnt all the data structures and basic operations in c. The work is under progress and many more algos and data structures will be incorporated in the github repo",
        //     link: "#"
        // },
        {
            name: "Collaborative Code Editor",
            description:
                "Technology Stack: ReactJS, MongoDB, WebSockets. This project replicates the core functionality of Google Docs but extends it to include both a code editor and a standard document editor. It enables real-time synchronization, allowing multiple users to collaborate seamlessly and edit code or documents simultaneously.",
            link: "https://github.com/haarit19058/CollaborativeEditorFinal.git"
        },
        {
            name: "Spotify Clone (CSS+HTML)",
            description:
                "Replicated the looks of spotify official website using plain CSS and HTML. ",
            link: "https://github.com/haarit19058/webdev.git"
        },
        {
            name: "WanderLust",
            description:
                "A website clone that has the core functionality like airbnb to view all the available hotels and resorts. The core idea is to use MongoDB and ejs templates.",
            link: "https://github.com/haarit19058/webdev.git"
        },
        {
            name: "Data Structures in C",
            description:
                "This is a personal project where I aim to implement various data structures and their basic operations in C. The work is ongoing, with plans to add many more algorithms and data structures to the GitHub repository over time.",
            link: "https://github.com/haarit19058/DSAinC.git"
        },
        {
            name: "JANUS",
            description:
                "The project involved using the JANUS library for inverse molecular design to generate molecules with desired properties. The primary focus was on filtering the data and customizing fitness functino for JANUS to meet specific requirements. The goal is to create a fitness function that works faster while still checking the needed molecular properties accurately.",
            link: "https://github.com/haarit19058/janus-final.git"
        },
        {
            name: "Human Activity Recognition",
            description:
            "This is a group project for ES335, where we classify activities like sitting and walking using both a custom-implemented decision tree and one from sklearn. We also analyzed time series data using t-SNE and explored prompt engineering for one-shot and zero-shot learning.",
            link:"https://github.com/haarit19058/MachineLearning.git"
        },
        {
            name: "Image Reconstruction, scaling and compression",
            description:
            "In this project of ES335, we performed various methods of image reconstruction using polynomial and random fourier features. This task also included scaling and compression of the image",
            link:"https://github.com/haarit19058/MachineLearning.git"
        },
        {
            name: "Object Detection",
            description:
            "THis is also a part of project in ES335 where we used the VGG model and linear MLPs for object detection between two classes: airplanes and helicopters. Additionally, we implemented KNN and approximate methods such as KD Trees and LSH with random projection.",
            link:"https://github.com/haarit19058/MachineLearning.git"
        },
        {
            name: "Next Word Predictor",
            description:
            "As part of ES335, we used MLPs for next-character prediction and extended the approach to next-word prediction on the War and Peace text dataset. We also applied MLPs for predictions on the MNIST and FMNIST datasets and used t-SNE to visualize patterns in the data.",
            link:"https://github.com/haarit19058/MachineLearning.git"
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
    serviceDescription.style.fontSize = "15px";

    const serviceLink = document.createElement("a");
    serviceLink.href = service.link;
    serviceLink.textContent = "Explore..";
    serviceLink.style.fontSize = "15px";
    serviceLink.style.fontWeight = 300;
    serviceLink.style.textDecoration = "underline";
    serviceLink.style.color = "white";

    serviceDiv.appendChild(serviceTitle);
    serviceDiv.appendChild(serviceDescription);
    serviceDiv.appendChild(serviceLink);

    servicesList.appendChild(serviceDiv);
});
