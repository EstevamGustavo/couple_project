export const sendAuth = async ({ username, password }) => {
  try {
    const response = await fetch("http://localhost:5000/auth", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    return response.json();
  } catch (error) {
    return error;
  }
};
