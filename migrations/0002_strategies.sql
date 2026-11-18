CREATE TABLE IF NOT EXISTS strategies (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL COLLATE NOCASE UNIQUE,
  archived INTEGER NOT NULL DEFAULT 0 CHECK (archived IN (0, 1))
);
ALTER TABLE trades ADD COLUMN strategy_id TEXT REFERENCES strategies(id);
INSERT OR IGNORE INTO strategies (id, name) VALUES ('macd-divergence', 'MACD Divergence');
