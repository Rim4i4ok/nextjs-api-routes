import { Fragment, useState } from "react";
import { geFeedBackData } from "../../utils/data";

function FeedbackPage(props) {
  const [selectedFeedback, setSelecteFeedback] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelecteFeedback(data.feedback);
      });
  }

  return (
    <Fragment>
      {selectedFeedback && <p>{selectedFeedback.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => loadFeedbackHandler(item.id)}>
              Show detail
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const data = geFeedBackData();

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
