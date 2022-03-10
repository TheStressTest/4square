package api

type Config struct {
	Server struct {
		port int
	}

	Database struct {
		User string
		Password string
		Port int
		Address string
	}
}