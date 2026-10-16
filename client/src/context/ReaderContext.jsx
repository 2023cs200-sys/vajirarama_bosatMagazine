import { createContext, useContext, useState } from "react";

const ReaderContext = createContext(undefined);

export function ReaderProvider({ children }) {
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState("light");
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("bosat-bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (articleId) => {
    setBookmarks((prev) => {
      const exists = prev.includes(articleId);
      const updated = exists
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId];
      localStorage.setItem("bosat-bookmarks", JSON.stringify(updated));
      return updated;
    });
  };

  const isBookmarked = (articleId) => bookmarks.includes(articleId);

  return (
    <ReaderContext.Provider
      value={{ fontSize, setFontSize, theme, setTheme, bookmarks, toggleBookmark, isBookmarked }}
    >
      {children}
    </ReaderContext.Provider>
  );
}

export function useReader() {
  const context = useContext(ReaderContext);
  if (!context) {
    throw new Error("useReader must be used within a ReaderProvider");
  }
  return context;
}
