export async function getAll() {
  try {
    const response = await fetch("/api/products-test");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
