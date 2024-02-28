import restaurant from "./imgs/restaurant.jpg";

const createAboutPage = () => {
  const content = document.querySelector("#content");

  const aboutContainer = document.createElement("div"); //About Us section
  aboutContainer.classList.add("aboutcontainer");

  const bioHeading = document.createElement("h2");
  bioHeading.classList.add("bio");
  bioHeading.innerHTML = "About Us";

  const bioContainer = document.createElement("div");
  bioContainer.classList.add("biocontainer");

  const bio = document.createElement("p");
  bio.classList.add("bio");
  bio.innerHTML =
    "As Chef/Proprietor of OAKLEYS bistro, Steven J. Oakley is living his childhood dream and hoping to help others do the same. An unpretentious, neighborhood American bistro is very different from the haute cuisine establishments of Chef Oakley’s previous experiences. Put in his words, “We wanted to dispel the notion that special food should be reserved for special occasions: we created an affordable, everyday destination where every meal is a special occasion.”";

  const bioImg = new Image();
  bioImg.src = restaurant;
  bioImg.classList.add("bio");

  const contactContainer = document.createElement("div"); //Contact Us section
  contactContainer.classList.add("contactcontainer");

  const contactText = document.createElement("div");
  contactText.classList.add("contacttext");

  const title = document.createElement("h2");
  title.innerHTML = "Contact Us";
  contactText.appendChild(title);

  const contactInfo = {
    Address: "1000 Lincoln St, Lincoln, Nebraska 10101",
    Email: "oakleysbistro@restaurant.com",
    Phone: "Reservations & Catering: 100-989-3745",
  };

  Object.values(contactInfo).forEach((value) => {
    const contactItem = document.createElement("p");
    contactItem.innerHTML = `${value}`;
    contactText.appendChild(contactItem);
  });

  const map = document.createElement("iframe");
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11505.803035634517!2d-94.76293401726959!3d43.86721151863466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f4bd690df66f57%3A0xd4095320f5e41e07!2sOdin%2C%20MN%2056160!5e0!3m2!1sen!2sus!4v1709066830083!5m2!1sen!2sus";
  map.width = 400;
  map.height = 400;

  contactContainer.appendChild(contactText);
  contactContainer.appendChild(map);
  bioContainer.appendChild(bio);
  bioContainer.appendChild(bioImg);
  aboutContainer.appendChild(bioHeading);
  aboutContainer.appendChild(bioContainer);
  content.appendChild(aboutContainer);
  content.appendChild(contactContainer);
};

export default createAboutPage;
