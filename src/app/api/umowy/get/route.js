import mysql from 'mysql2/promise'

export async function GET(request) {
    const connection = await mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    });
    try{
        const [rows] = await connection.execute('SELECT * from temprejestr');
        await connection.end();

        return new Response(JSON.stringify(rows), {
            status:200,
            headers: {'Content-Type': 'application/json'},
        });
    }catch(error){
        console.error(error);
        return new Response(JSON.stringify({ error: 'Database query failed'}), {
            status:500,
            headers: {'Content-Type': 'application/json'},
        });
    }
}
