CREATE TABLE notification_settings (
	user_id INT REFERENCES users(id) ON DELETE CASCADE,
	notification_type VARCHAR(50) NOT NULL,
	is_enabled BOOLEAN DEFAULT TRUE NOT NULL,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (user_id, notification_type)
);