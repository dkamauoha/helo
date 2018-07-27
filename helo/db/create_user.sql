INSERT INTO users (username, password)
VALUES ($1, $2);
SELECT id, username, profile_pic FROM users 
WHERE username = $1;