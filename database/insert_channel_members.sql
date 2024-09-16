CREATE TABLE channel_members (
	channel_id INT REFERENCES channels(id) ON DELETE CASCADE,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (channel_id, user_id)
);