// const featureList = document.querySelector('#feature_list');

// Feature data array
const features = [
    {
        image: "/img/f1.svg",
        title: "Drag, Drop, Done",
        description: "Make task management effortless with intuitive drag-and-drop features that save time and reduce complexity.",
    },
    {
        image: "/img/a2.svg",
        title: "Real-Time Collaboration",
        description: "Work together seamlessly with team members in real-time, no matter where you are.",
    },
    {
        image: "/img/a3.svg",
        title: "Smart Task Scheduling",
        description: "Let AI suggest the best times to complete tasks based on your work patterns.",
    },
    {
        image: "/img/a4.svg",
        title: "Customizable Workflows",
        description: "Adapt the system to your workflow with flexible options and automation.",
    },
    {
        image: "/img/a5.svg",
        title: "Seamless Integrations",
        description: "Connect with your favorite tools like Slack, Trello, and Google Drive effortlessly.",
    },
    {
        image: "/img/a6.svg",
        title: "Powerful Analytics",
        description: "Get insights into team productivity and task completion rates with visual reports.",
    }
];

// Get the feature list container
const featureList = document.getElementById("feature_list");

// Generate feature cards dynamically
features.forEach(feature => {
    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");

    featureCard.innerHTML = `
    <img class="feature-card__image" src="${feature.image}" alt="${feature.title}" />
    <p class="feature-card__feature-title">${feature.title}</p>
    <p class="feature-card__feature-description">${feature.description}</p>
  `;

    // Append the card to the container
    featureList.appendChild(featureCard);
});