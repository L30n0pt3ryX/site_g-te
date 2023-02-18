/*--- NAV BAR UNDER 600px ---*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

/*--- Carousel mobilier intérieur ---*/
let gallery = document.querySelector("ul");
let wrapper = document.querySelector("section");
let dragging = false,
  mouseLocation,
  galleryLocation;

const dragStart = (e) => {
  dragging = true;
  mouseLocation = e.pageX;
  galleryLocation = wrapper.scrollLeft;
};

const dragActive = (e) => {
  if (!dragging) return;
  let offset = e.pageX - mouseLocation;
  wrapper.scrollLeft = galleryLocation - offset;
};

const dragStop = (e) => {
  dragging = false;
  mouseLocation = e.pageX;
  galleryLocation = wrapper.scrollLeft;
};
gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragActive);
gallery.addEventListener("mouseup", dragStop);