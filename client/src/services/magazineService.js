const API_BASE = "http://localhost:3001/api";

/**
 * Fetch a paginated/filtered list of magazine issues.
 * @param {object} [params] - Query parameters (page, limit, etc.)
 * @returns {Promise<object>}
 */
export async function getMagazines(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE}/magazines?${query}`);
  if (!response.ok) throw new Error("Failed to fetch magazines");
  return response.json();
}

/**
 * Fetch a single magazine issue by ID.
 * @param {string|number} id
 * @returns {Promise<object>}
 */
export async function getMagazine(id) {
  const response = await fetch(`${API_BASE}/magazines/${id}`);
  if (!response.ok) throw new Error("Failed to fetch magazine");
  return response.json();
}

/**
 * Fetch the latest magazine issue.
 * @returns {Promise<object>}
 */
export async function getLatestMagazine() {
  const response = await fetch(`${API_BASE}/magazines/latest`);
  if (!response.ok) throw new Error("Failed to fetch latest magazine");
  return response.json();
}

/**
 * Fetch magazine archive for a given year.
 * @param {number} year
 * @returns {Promise<object>}
 */
export async function getMagazineArchive(year) {
  const response = await fetch(`${API_BASE}/magazines/archive/${year}`);
  if (!response.ok) throw new Error("Failed to fetch magazine archive");
  return response.json();
}

const magazineService = { getMagazines, getMagazine, getLatestMagazine, getMagazineArchive };
export default magazineService;
