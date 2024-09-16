CREATE TABLE message_reactions (
	message_id INT REFERENCES messages(id) ON DELETE CASCADE,
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	reaction VARCHAR(20) NOT NULL,
	reacted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (message_id, user_id)
);