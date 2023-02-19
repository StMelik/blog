type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods, additionals: string[]): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
    ...additionals
  ].join(' ');
};
