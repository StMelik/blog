type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods = {}, additionals: string[] = []): string => [
  cls,
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
  ...additionals.filter(Boolean)
].join(' ');
