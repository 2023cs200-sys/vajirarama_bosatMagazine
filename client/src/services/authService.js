const API_BASE = "http://localhost:3001/api";

/**
 * Log in a user with email and password.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<object>}
 */
export async function login(email, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) throw new Error("Login failed");
  return response.json();
}

/**
 * Register a new user.
 * @param {object} userData
 * @returns {Promise<object>}
 */
export async function register(userData) {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("Registration failed");
  return response.json();
}

/**
 * Log out the current user.
 * @returns {Promise<void>}
 */
export async function logout() {
  const response = await fetch(`${API_BASE}/auth/logout`, {
    method: "POST",
  });
  if (!response.ok) throw new Error("Logout failed");
}

/**
 * Get the currently authenticated user's profile.
 * @returns {Promise<object>}
 */
export async function getCurrentUser() {
  const response = await fetch(`${API_BASE}/auth/me`);
  if (!response.ok) throw new Error("Failed to fetch current user");
  return response.json();
}

const authService = { login, register, logout, getCurrentUser };
export default authService;
