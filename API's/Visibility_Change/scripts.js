const video = document.getElementById("video");

/* addEventListener("visibilitychange", (e) => {
  if (document.visibilityState === "visible") {
    console.log("PLAY");
    video.onplay();
  } else if (document.visibilityState === "hidden") {
    console.log("PLAY");
    video.onplay();
  }
}); */

addEventListener("visibilitychange", () =>
  document.visibilityState === "visible" ? video.play() : video.pause()
);
