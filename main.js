class AtiModal {
  constructor() {
    this.ignition = false;
    this.open = false; //boolean
    this.container = null; //container element
    this.title = null;
    this.videoUrl = null;
    this.config = null;
    //elements
    this.elements = document.getElementsByClassName("ytVideo");
  }
  init(container, config) {
    this.ignition = true;
    this.config = config; //object config
    this.container = document.getElementById(container);
    this.elements.length < 1
      ? console.error(
          `There's not any video container. controll that your element have the ytVideo class name with an respective dataset for video. ie: data-video="https://youtu.be/8d4vMtne2Ko"`
        )
      : console.log("Modal is ready to launch!");
    //   Send elements to listeners
    for (let el of this.elements) {
      this.modal(el);
    }
  }
  modal(element) {
    element.addEventListener("click", e => {
      this.title = e.target.dataset.title;
      this.videoUrl = e.target.dataset.video;
      this.videoUrl ? this.toggle() : this.modalErrors();
    });
  }
  toggle() {
    this.open = !this.open;
    this.open ? console.log("open") : console.log("closed");
    this.open ? this.createModal() : this.destroyModal();
  }
  createModal() {
    let isPercent = this.config.percent ? "%" : "px";
    // this.container.style.width = "100%";
    // this.container.style.height = "100vh";
    this.container.style =
      "width:100%; height:100vh; position:fixed; top:0;left:0;";
    let modalContainer = document.createElement("div");
    modalContainer.id = "ava-modal";
    modalContainer.className = "ava-modal";
    modalContainer.style = "position:relative; width:100%;height:100%;";

    // YouTube Box
    let ytBox = document.createElement("div");
    ytBox.id = "yt-box";
    ytBox.className = "ava-yt-box";
    ytBox.style = "margin:0 auto; position: relative;";
    ytBox.style.width = `${this.config.width}${isPercent}`;
    ytBox.style.height = `${this.config.height}${isPercent}`;
    ytBox.style.background = `${this.config.backgroundColor}`;
    ytBox.style.top = `${this.config.percentTop}%`;
    // Header Box
    let headBox = document.createElement("div");

    headBox.innerHTML = this.title
      ? `<span style='text-align:center;margin:0 auto;display: inherit;padding: 0.5em;font-size: 1.3em;text-transform: uppercase;'>${
          this.title
        }</span>`
      : "";

    headBox.style = "width:100%; height:10%;position:absolute;left:0;top:0;";
    headBox.style.background = `${this.config.headerBg}`;
    headBox.className = "ava-yt-box__header";
    // Close button
    let closeBtn = document.createElement("button");
    closeBtn.style = "width:10%; height: 10%;position:absolute;right:0;top:0;";
    closeBtn.textContent = "X";
    closeBtn.className = "ava-yt-box__x-btn";
    //close btn toggle modal
    closeBtn.addEventListener("click", e => {
      e.stopPropagation();
      this.toggle();
    });
    // Components header on youtube box
    ytBox.appendChild(headBox);
    ytBox.appendChild(closeBtn);

    // Append you tube box to modal container
    modalContainer.appendChild(ytBox);
    // Append the modal container to main container
    this.container.appendChild(modalContainer);

    if (this.videoUrl) {
      console.log(this.videoUrl);
      this.launchVideo(ytBox);
    } else {
      console.error("Invalid url video or null");
    }
  }
  destroyModal() {
    this.container.style = "";
    this.container.innerHTML = "";
  }
  launchVideo(onElement) {
    console.log(onElement);

    this.config.autoPlay ? (this.videoUrl = `${this.videoUrl}?autoplay=1`) : "";

    let ytFrame = document.createElement("iframe");
    ytFrame.style = "margin:1em auto;width:100%;height:100%;";
    ytFrame.src = this.videoUrl;
    ytFrame.frameBorder = "0";
    ytFrame.allowFullscreen = true;

    onElement.appendChild(ytFrame);
  }
  modalErrors() {
    !this.videoUrl
      ? console.error(
          'No video url detected on element through dataset. ie: data-video="http//urlyoutubevideo" '
        )
      : "have fun!";
  }
}

let config = {
  //   percent: true,
  width: 500,
  height: 300,
  percentTop: 20,
  autoPlay: true,
  //   headerBg: "white",
  backgroundColor: "white"
};
window.avaModal = new AtiModal();
window.onload = avaModal.init("modal-container", config);
