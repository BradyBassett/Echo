CREATE TABLE read_recipts (
	message_id INT REFERENCES messages(id) ON DELETE CASCADE,
	user_id INT REFERENCES users(id),
	read_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (message_id, user_id)
);