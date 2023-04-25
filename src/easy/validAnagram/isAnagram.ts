function isAnagram(s: string, t: string): boolean {
	const mapA: Record<string, number> = {}
	const mapB: Record<string, number> = {}

	if (s.length !== t.length) {
		return false
	}

	for (const char of s.split('')) {
		mapA[char] = mapA[char] == null ? 0 : mapA[char] + 1
	}

	for (const char of t.split('')) {
		mapB[char] = mapB[char] == null ? 0 : mapB[char] + 1
	}

	for (const key of Object.keys(mapA)) {
		if (mapA[key] === mapB[key]) {
			continue
		} else {
			return false
		}
	}

	return true
};

export { isAnagram }
