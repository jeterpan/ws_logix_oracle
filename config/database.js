module.exports = {
    hrPool: {
        user: process.env.WS_LOGIX_USUARIO,
        password: process.env.WS_LOGIX_SENHA,
        connectionString: process.env.WS_LOGIX_CONN_STRING,
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
}