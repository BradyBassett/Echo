CREATE TABLE files (
	id SERIAL PRIMARY KEY,
	user_id INT REFERENCES users(id),
	message_id INT REFERENCES messages(id),
	file_url VARCHAR(255) NOT NULL,
	file_type VARCHAR(50) NOT NULL,
	uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
);