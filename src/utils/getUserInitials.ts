export const getUserInitials = (userName: string): string => {
  if (userName.includes(" ")) {
    const splitedName = userName.split(" ");
    return (
      splitedName[0].substring(0, 1).toLocaleUpperCase() +
      splitedName[1].substring(0, 1).toLocaleUpperCase()
    );
  } else {
    return userName.substring(0, 1).toLocaleUpperCase();
  }
};
