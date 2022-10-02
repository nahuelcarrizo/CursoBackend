//prettier-ignore
export async function addMessage(allMessages) {
    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allMessages)
        });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
