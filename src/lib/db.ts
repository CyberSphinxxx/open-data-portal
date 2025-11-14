// Database context - stores the current database instance
let dbInstance: D1Database | null = null;

// Initialize the database connection
export const initDB = (db: D1Database): void => {
    dbInstance = db;
}

// Get the current database instance
const getDB = (): D1Database => {
  if (!dbInstance) {
    throw new Error('Database not initialized. Call initDB() first.');
  }
  return dbInstance;
};

// Helper function to run a query and return all results
export const query = async <T = any>(
  sql: string,
  params: any[] = []
): Promise<T[]> => {
  const db = getDB();
  const result = await db.prepare(sql).bind(...params).all();
  return result.results as T[];
};

// Helper function to run a query and return first result
export const queryOne = async <T = any>(
  sql: string,
  params: any[] = []
): Promise<T | null> => {
  const db = getDB();
  const result = await db.prepare(sql).bind(...params).first();
  return result as T | null;
};

// Helper function to execute a statement (INSERT, UPDATE, DELETE)
export const execute = async (
  sql: string,
  params: any[] = []
): Promise<D1Result> => {
  const db = getDB();
  return await db.prepare(sql).bind(...params).run();
};

// Helper function to execute multiple statements in a batch
export const batch = async (
  statements: Array<{ sql: string; params: any[] }>
): Promise<D1Result[]> => {
  const db = getDB();
  const prepared = statements.map(({ sql, params }) =>
    db.prepare(sql).bind(...params)
  );
  return await db.batch(prepared);
};

// Parse tags field (comma-separated or JSON)
export const parseTags = (tags: string | null): string[] => {
  if (!tags) return [];

  // Try JSON parse first
  if (tags.startsWith('[')) {
    try {
      return JSON.parse(tags);
    } catch {
      return [];
    }
  }

  // Otherwise treat as comma-separated
  return tags.split(',').map(t => t.trim()).filter(Boolean);
};

// Stringify tags array for storage
export const stringifyTags = (tags: string[]): string => {
  return tags.join(', ');
};
