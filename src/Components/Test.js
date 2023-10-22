import React, { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const textarea = document.querySelector(".textarea");
    textarea.style.display = "none";
  }, []);
  const handleSubmit = () => {
    const timeByUser = document.querySelector(".time").value;

    setTimeout(() => {
      const textarea = document.querySelector(".textarea");
      textarea.style.display = "block";
      console.log("submitted");
      var timer = 1;
      const hero = document.querySelector(".hero");
      const toShowTime = document.querySelector(".counter");
      let intervalCounter = setInterval(() => {
        toShowTime.innerHTML = `<h2>Seconds passed: ${timer}</h2>`;
        timer += 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(intervalCounter);
        const content_raw = document.querySelector(".textarea").value;
        const content = content_raw
          .trim()
          .split(/[\s,\t,\n]+/)
          .join(" ");
        console.log(content);
        const words = content.split(" ");
        var counter = 0;
        var charCounter = 0;
        words.forEach((word) => {
          counter += 1;
          const characters = word.split("");
          characters.forEach((character) => {
            charCounter += 1;
          });
        });
        console.log(counter, "    ", charCounter);
        hero.innerHTML = `
        <div class="card text-center bg-black">
          
          <div class="card-body">
            <h4 class="card-title">Result</h4>
            <div class="card-text"> Words per second : ${
              counter / timeByUser
            } <br/> Character per second : ${charCounter / timeByUser}</div>
            <div class="card-footer" >Total Words: ${counter} <br/> Total Characters: ${charCounter}</div>
          </div>
        </div>
        `;
      }, timeByUser * 1000);
    }, 3000);
  };
  return (
    <div>
      <div className="container p-5 my-5">
        <div className="row">
          <div className="col text-start">
            <h1 className="display-2">Typing Test</h1>
          </div>
        </div>
        <div className="row py-5 text-start">
          <div className="col-md-6">
            <div className="row my-2">
              <div className="col">
                <h3>Enter the time you want to test your typing in seconds:</h3>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <input className="p-3 time" type="text" />
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <button onClick={handleSubmit} className="btn  btn-light">
                  Submit
                </button>
              </div>
            </div>
            <div className="row my-2">
              <div className="col">
                <h5 className="text-info">
                  * Once you click the submit button , kindly start typing in
                  the text area after 3 seconds! The text area will appear just
                  bellow the 'Type!' heading.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="display-6  d-flex " style={{ gap: "10px" }}>
              Type! <p className="counter"></p>
            </div>
            <hr />
            <div className="hero">
              <div className="row"></div>
              <div className="row">
                <textarea
                  className="textarea p-3 bg-black"
                  name="test"
                  id=""
                  cols="70"
                  rows="10"
                  spellCheck="false"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
