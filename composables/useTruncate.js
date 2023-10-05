export const useTruncate = () => {
  const truncateString = (theString, range) =>
    theString.trim().length > range
      ? theString.slice(0, range) + " ..."
      : theString;

  return truncateString;
};
