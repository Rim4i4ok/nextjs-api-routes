import { useRef } from "react";

function HomePage() {
  const emailInputRed = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const email = emailInputRed.current.value;
    const feedback = feedbackInputRef.current.value;

    const reqBody = { email: email, text: feedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resonse) => resonse.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type={"email"} id="email" ref={emailInputRed} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feeddback" rows={3} ref={feedbackInputRef}></textarea>
        </div>
        <button>Submit feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
