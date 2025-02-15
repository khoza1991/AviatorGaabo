document.getElementById("predictionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const duration = document.getElementById("duration").value;
  const previousMultiplier = document.getElementById("previousMultiplier").value;

  try {
    const response = await fetch("https://github.com/khoza1991/AviatorGaabo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        duration: parseFloat(duration),
        previous_multiplier: parseFloat(previousMultiplier),
      }),
    });

    const data = await response.json();
    document.getElementById("predictionValue").textContent = `${data.prediction}x`;
  } catch (error) {
    console.error("Error fetching prediction:", error);
    document.getElementById("predictionValue").textContent = "Error";
  }
});
