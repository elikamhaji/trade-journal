CREATE TABLE IF NOT EXISTS trades (
  id TEXT PRIMARY KEY, owner TEXT NOT NULL, pair TEXT NOT NULL, date TEXT NOT NULL,
  frame TEXT NOT NULL, side TEXT NOT NULL, link TEXT NOT NULL, outcome TEXT NOT NULL,
  hundredths_r INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS trades_owner_date ON trades(owner, date DESC);
