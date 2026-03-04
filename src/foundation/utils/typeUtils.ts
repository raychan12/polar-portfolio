export type EnumLike<T extends object> =
	string extends T[keyof T] ? never
	: number extends T[keyof T] ? never
	: T[keyof T];
