export async function getAll() {
  try {
    const response = await fetch("/api/carrito");
    console.log("getall carrito");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function deleteItem(item) {
  const response = await fetch(`/api/carrito/:${item.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
}

/* export async function buyItem(item) {
  const response = await fetch("api/carrito", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
} */
