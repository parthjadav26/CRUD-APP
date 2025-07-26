import * as clientservices from '../services/clientServices.js'

export const getClients = async (req, res) => {
    try {
        const clients = await clientservices.getClients();
        res.status(200).json(clients);
    } catch (error) {
        console.error("Error fetching clients: ", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientservices.createClient(clientData);
        res.status(200).json(newClient);
    } catch (error) {
        console.error("Error creating clients: ", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id
        const clientData = req.body;
        const updateClient = await clientservices.updateClient(clientData,clientId);
        if(!updateClient){
            res.status(500).json({ message: 'Client not found'});  
        }
        res.status(200).json(updateClient);
    } catch (error) {
        console.error("Error upadting clients: ", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id
        const deleteClient = await clientservices.deleteClient(clientId);
        if(!deleteClient){
            res.status(500).json({ message: 'Client not found'});  
        }
        res.status(200).json(deleteClient);
    } catch (error) {
        console.error("Error deleting clients: ", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const searchClient = async (req, res) => {
    try {
        const searchTerm = req.query.q;
        const clients = await clientservices.searchClient(searchTerm);
        res.status(200).json(clients);
    } catch (error) {
        console.error("Error deleting clients: ", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
