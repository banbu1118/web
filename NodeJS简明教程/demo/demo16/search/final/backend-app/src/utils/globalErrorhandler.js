export  default function(err, _req, res, _next) {
	const {
		name = 'unknown error',
		message = 'something went wrong',
		statusCode = 500
	} = err

	res.status(statusCode).send(message)
}