const API_BASE = "http://localhost:3001/api";

/**
 * Get the current status of automation tasks.
 * @returns {Promise<object>}
 */
export async function getAutomationStatus() {
  const response = await fetch(`${API_BASE}/automation/status`);
  if (!response.ok) throw new Error("Failed to fetch automation status");
  return response.json();
}

/**
 * Trigger a specific automation task.
 * @param {string} task - The task name or identifier.
 * @returns {Promise<object>}
 */
export async function triggerAutomationTask(task) {
  const response = await fetch(`${API_BASE}/automation/trigger`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
  if (!response.ok) throw new Error("Failed to trigger automation task");
  return response.json();
}

/**
 * Get the history of past automation task runs.
 * @returns {Promise<object>}
 */
export async function getTaskHistory() {
  const response = await fetch(`${API_BASE}/automation/history`);
  if (!response.ok) throw new Error("Failed to fetch task history");
  return response.json();
}

const automationService = { getAutomationStatus, triggerAutomationTask, getTaskHistory };
export default automationService;
