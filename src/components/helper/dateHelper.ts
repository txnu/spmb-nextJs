/** @format */

export function toJakartaDate(dateString: string) {
  return new Date(
    new Date(dateString).toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
}
