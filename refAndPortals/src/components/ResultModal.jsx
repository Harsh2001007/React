import { forwardRef } from "react";

const Result = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds </strong>
      </p>
      <p>
        Your time had <strong>X second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Result;