export const clsx = (...atr: string[]) => atr.join(" ");

export const classNameGenerator =
  (styles: { [key: string]: string }) => (className: string) =>
    clsx(className, styles[className]);
