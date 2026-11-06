// function isString(value: unknown): value is string {
//   return typeof value === "string";
// }
function show(result) {
    if (result.status === 'success') {
        return result.data;
    }
    return result.message;
}
console.log(show({ status: 'success', data: 'Done!' }));
export {};
