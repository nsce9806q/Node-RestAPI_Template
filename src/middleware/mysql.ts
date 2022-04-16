import mysql from 'mysql2/promise';

export default () => {
    const connection = mysql.createPool({
        host: 'localhost',
        user: 'admin',
        password: 'pass1234',
        connectionLimit: 4,
        database: 'NODE_TEMPLATE_DB'
    });

    return connection;
}

