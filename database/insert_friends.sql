CREATE TABLE friends (
	user_id1 int REFERENCES users(id) ON DELETE CASCADE,
	user_id2 int REFERENCES users(id) ON DELETE CASCADE,
	status VARCHAR(20) DEFAULT 'pending' NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (user_id1, user_id2)
);