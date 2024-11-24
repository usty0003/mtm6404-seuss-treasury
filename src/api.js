export const API_BASE = "https://seussology.info/api";

export const fetchBooks = async () => {
  const response = await fetch(`${API_BASE}/books`);
  return response.json();
};

export const fetchBookDetails = async (id) => {
  const response = await fetch(`${API_BASE}/books/${id}`);
  return response.json();
};

export const fetchQuotes = async () => {
  const response = await fetch(`${API_BASE}/quotes`);
  return response.json();
};