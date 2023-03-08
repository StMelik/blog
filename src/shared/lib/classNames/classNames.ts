type Mods = Record<string, boolean>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additionals: Array<string | undefined> = []
): string => [
  cls,
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
  ...additionals.filter(Boolean)
].join(' ');
