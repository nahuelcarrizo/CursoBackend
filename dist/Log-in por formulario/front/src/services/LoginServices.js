export async function login(user) {
  try {
    const response = await fetch("/session/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const response = await fetch("/home");
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
