const API_BASE = "http://localhost:3001/api";

/**
 * Perform a general search with optional filters.
 * @param {object} params - Search query and filters (q, category, dateFrom, dateTo, etc.)
 * @returns {Promise<object>}
 */
export async function search(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE}/search?${query}`);
  if (!response.ok) throw new Error("Search failed");
  return response.json();
}

/**
 * Fetch search suggestions for an autocomplete query.
 * @param {string} query
 * @returns {Promise<object>}
 */
export async function getSearchSuggestions(query) {
  const params = new URLSearchParams({ q: query }).toString();
  const response = await fetch(`${API_BASE}/search/suggestions?${params}`);
  if (!response.ok) throw new Error("Failed to fetch search suggestions");
  return response.json();
}

const searchService = { search, getSearchSuggestions };
export default searchService;
