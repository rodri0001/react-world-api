import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function BackBtn() {
  return (
    <Link to="/" className="shadow-md backBtn shadow-stone-500/10 dark:shadow-stone-800/80">
      <FaArrowLeftLong />
      Back
    </Link>
  );
}

export default BackBtn;
