UPDATE bins
SET item = null, price = null, image = null
WHERE id = $1;