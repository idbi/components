export const getInitials = (...args: (string | undefined | null)[]) => {
  return args.reduce((acc: string, arg) => acc + (arg || "").charAt(0), "").toUpperCase();
};
