const refs = {
  setLinkRef: document.querySelector(".enterLink"),
  currentLink: document.querySelector(".newSite"),
};

let mainLink = "https://www.youtube.com/";

refs.setLinkRef.addEventListener("click", handlerResetLinkClick);

refs.currentLink.addEventListener("click", handlerNewSiteClick);

function setLink(link = "https://www.youtube.com/") {
  mainLink = link;
}

function checkLink(link) {
  if (link.includes("http") || link.includes("https")) return link;
  else {
    link = "https://" + link;
    return link;
  }
}

function openNewSite() {
  window.open(mainLink);
}

function handlerNewSiteClick() {
  openNewSite();
}

function handlerResetLinkClick() {
  let link = prompt(
    "Enter link! Example https://www.youtube.com/ or youtube.com",
    ""
  );
  link = checkLink(link);
  setLink(link);
}
