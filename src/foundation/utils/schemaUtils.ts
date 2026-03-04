export const valuesOf = <T extends Record<string, string>>(obj: T) =>
	Object.values(obj) as [T[keyof T], ...T[keyof T][]];
