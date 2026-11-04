const STORAGE_KEY = "don-ramiro-cotizacion-ct-001";

const statusBadge = document.querySelector("#status-badge");
const actions = document.querySelector("#quote-actions");
const resultMessage = document.querySelector("#result-message");
const resultTitle = document.querySelector("#result-title");
const resultDetail = document.querySelector("#result-detail");
const dialog = document.querySelector("#confirmation-dialog");
const dialogDescription = document.querySelector("#dialog-description");
const confirmButton = document.querySelector("#confirm-decision");
const cancelButton = document.querySelector("#cancel-decision");

let selectedDecision = null;

function readDecision() {
  try {
    const decision = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const validDate = decision?.date && !Number.isNaN(Date.parse(decision.date));
    return ["aprobada", "rechazada"].includes(decision?.status) && validDate
      ? decision
      : null;
  } catch {
    return null;
  }
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es", {
    dateStyle: "long",
    timeStyle: "short"
  }).format(new Date(date));
}

function showDecision(decision) {
  const approved = decision.status === "aprobada";
  const statusLabel = approved ? "Aprobada" : "Rechazada";

  statusBadge.textContent = statusLabel;
  statusBadge.className = `status ${approved ? "status-approved" : "status-rejected"}`;
  resultMessage.className = `result-message ${approved ? "result-approved" : "result-rejected"}`;
  resultTitle.textContent = `Cotización ${statusLabel.toLowerCase()}`;
  resultDetail.textContent = `Decisión registrada el ${formatDate(decision.date)}. Esta decisión es definitiva.`;
  resultMessage.hidden = false;
  actions.hidden = true;
}

function openConfirmation(status) {
  selectedDecision = status;
  const approved = status === "aprobada";

  dialogDescription.textContent = approved
    ? "¿Confirmas que deseas aprobar esta cotización por $ 275.000? Después no podrás cambiar la decisión."
    : "¿Confirmas que deseas rechazar esta cotización? Después no podrás cambiar la decisión.";
  confirmButton.textContent = approved ? "Sí, aprobar" : "Sí, rechazar";
  confirmButton.className = `button ${approved ? "button-approve" : "button-reject"}`;
  dialog.showModal();
}

document.querySelectorAll("[data-decision]").forEach((button) => {
  button.addEventListener("click", () => openConfirmation(button.dataset.decision));
});

cancelButton.addEventListener("click", () => {
  selectedDecision = null;
  dialog.close();
});

dialog.addEventListener("cancel", () => {
  selectedDecision = null;
});

confirmButton.addEventListener("click", () => {
  if (!selectedDecision || readDecision()) return;

  const decision = {
    status: selectedDecision,
    date: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(decision));
  } catch {
    resultTitle.textContent = "No fue posible guardar la decisión";
    resultDetail.textContent = "Habilita el almacenamiento del navegador e inténtalo nuevamente.";
    resultMessage.className = "result-message result-rejected";
    resultMessage.hidden = false;
    dialog.close();
    return;
  }

  dialog.close();
  showDecision(decision);
});

const savedDecision = readDecision();
if (savedDecision) showDecision(savedDecision);
