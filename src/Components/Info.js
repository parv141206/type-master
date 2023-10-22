import React from "react";

export default function Info() {
  const beatStyle = {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: "0",
    top: "0",
    backgroundImage:
      " repeating-linear-gradient(transparent, transparent 13% , rgba(204, 0, 255, 0.18) 15%), repeating-linear-gradient(90deg, transparent, transparent 13%, rgba(0, 0, 255, 0.15) 15%)",
    borderRadius: "50px",
    zIndex: "-1",
    opacity: "0.8",
  };
  const circleStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    height: "10%",
    width: "50%",
  };
  return (
    <div>
      <div className="container p-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1>How it works</h1>
            <div
              className="my-3 card text-center"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="card-body">
                <h1 className="card-title">Just Type</h1>
                <h5 className="card-text p-3">
                  Just go to the testYourself page and start typing . You can
                  choose the amount of time you want to measure your typing
                  speed . Then a result will be generated for how many words you
                  typed in that amount of time!
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6" style={{ position: "relative" }}>
            <div className="beat" style={beatStyle}></div>
            <svg
              className="display-1"
              style={{ fill: "#7200ff", width: "300px", height: "300px" }}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 d-flex justify-content-center align-items-center"
            style={{ position: "relative" }}
          >
            <div className="rotate" style={circleStyle}>
              <hr style={{ color: "white" }} />
            </div>
            <svg
              style={{ fill: "#dc3545a8", width: "300px", height: "300px" }}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
            </svg>
          </div>
          <div className="col-md-6">
            <h1>How it works</h1>
            <div
              className="my-3 card text-center"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="card-body">
                <h1 className="card-title">Cost you ask?</h1>
                <h5 className="card-text p-3">
                  This website is absolutely free. Test your typing speed for
                  free without any charges or signups!
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
