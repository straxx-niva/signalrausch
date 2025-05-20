// Platzhalter für Datenfunktionen (z.B. LocalStorage oder API)
export function loadPlan() {
  return JSON.parse(localStorage.getItem("plan")) || [];
}

export function savePlan(plan) {
  localStorage.setItem("plan", JSON.stringify(plan));
}
