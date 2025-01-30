import PropTypes from "prop-types";

export default function Message({ message }) {
  return (
    <div className="flex h-full w-full items-center justify-center font-SFPro text-xl font-normal text-stone-50">
      {message}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};
