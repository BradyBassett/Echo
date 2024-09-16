CREATE OR REPLACE FUNCTION updated_modified_at()
RETURNS TRIGGER AS $$
BEGIN
		NEW.updated_at = CURRENT_TIMESTAMP;
		RETURN NEW;
END;
$$ LANGUAGE plpgsql;

------------------------------------------------------

CREATE TRIGGER update_users_modified_at
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION updated_modified_at();