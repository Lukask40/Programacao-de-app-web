const express = require('express');
const cors = require('cors');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('api', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
nome: {
    type: DataTypes.STRING,
    allowNull: false
},
email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
},
telefone: {
    type: DataTypes.STRING,
    allowNull: false
}
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar clientes'});
    }
});

app.post('/clientes', async (req, res) => {
    const {nome,email,telefone} = req.body;
    try {
        const novoCliente = await Client.create({nome,email,telefone}   );
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({error: 'Erro ao criar cliente'});
    }
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log('Conexão com o banco de dados estabelecida com sucesso');
    });
}).catch((error) => {
    console.error('Erro ao conectar com o banco de dados:', error);
});
