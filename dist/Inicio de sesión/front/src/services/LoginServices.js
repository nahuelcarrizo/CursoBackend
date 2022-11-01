export async function login(user) {
  try {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getHome() {
  try {
    const response = await fetch("http://localhost:4000/home");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function logOut() {
  try {
    const response = await fetch("/session/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
