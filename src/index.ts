export type First<T extends any[]> = T extends [] ? never : T[0];

const obj = {
	name: "lee",
	age: 18,
	email: "1.com",
};

const arr: number[] = [1, 2, 3, 4];

function test(arr: number[]): First<typeof arr> {
	return arr[0];
}
