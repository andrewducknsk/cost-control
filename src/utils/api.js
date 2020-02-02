export default (path, method = 'GET', body) =>
	fetch(path, {
		method,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		...(body && { body: JSON.stringify(body) }),
	}).then(response => response.json());
