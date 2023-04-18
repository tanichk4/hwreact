const HideDigits = ({ inputString, showNumber }) => {
  const lastDigits = inputString.slice(-4);
  const hiddenDigits = inputString
    .slice(0, -lastDigits.length)
    .replace(/(.{4})/g, "**** ");

  return <span>{showNumber ? inputString : hiddenDigits + lastDigits}</span>;
};

export default HideDigits;
