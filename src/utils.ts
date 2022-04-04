export const dateStringtoDate = (dateString: string): Date => {
  const parts = dateString.split("/").map((value: string) => parseInt(value));

  return new Date(parts[2], parts[1] - 1, parts[0]);
};
