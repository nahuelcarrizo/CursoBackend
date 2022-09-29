export async function getAll() {
  try {
    const response = await fetch("/api/productos");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function buyItem(item) {
  const response = await fetch("api/carrito", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
}

export async function updateItem(item) {
  const response = await fetch(`api/productos/:${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  return await response.json();
}
