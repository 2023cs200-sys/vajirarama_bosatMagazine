const API_BASE = "http://localhost:3001/api";

/**
 * Fetch a paginated/filtered list of articles.
 * @param {object} [params] - Query parameters (page, limit, category, etc.)
 * @returns {Promise<object>}
 */
export async function getArticles(params = {}) {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${API_BASE}/articles?${query}`);
  if (!response.ok) throw new Error("Failed to fetch articles");
  return response.json();
}

/**
 * Fetch a single article by ID.
 * @param {string|number} id
 * @returns {Promise<object>}
 */
export async function getArticle(id) {
  const response = await fetch(`${API_BASE}/articles/${id}`);
  if (!response.ok) throw new Error("Failed to fetch article");
  return response.json();
}

/**
 * Fetch featured articles.
 * @returns {Promise<object>}
 */
export async function getFeaturedArticles() {
  const response = await fetch(`${API_BASE}/articles/featured`);
  if (!response.ok) throw new Error("Failed to fetch featured articles");
  return response.json();
}

/**
 * Fetch articles by category.
 * @param {string} category
 * @returns {Promise<object>}
 */
export async function getArticlesByCategory(category) {
  const query = new URLSearchParams({ category }).toString();
  const response = await fetch(`${API_BASE}/articles?${query}`);
  if (!response.ok) throw new Error("Failed to fetch articles by category");
  return response.json();
}

/**
 * Search articles by query string.
 * @param {string} query
 * @returns {Promise<object>}
 */
export async function searchArticles(query) {
  const params = new URLSearchParams({ q: query }).toString();
  const response = await fetch(`${API_BASE}/articles/search?${params}`);
  if (!response.ok) throw new Error("Failed to search articles");
  return response.json();
}

const articleService = { getArticles, getArticle, getFeaturedArticles, getArticlesByCategory, searchArticles };
export default articleService;
