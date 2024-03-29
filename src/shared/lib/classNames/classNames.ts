export type Mods = Record<string, boolean | undefined>;

/**
 * Функция для удобной работы с классами
 */
export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string =>
  [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additional.filter(Boolean)
  ].join(' ');
