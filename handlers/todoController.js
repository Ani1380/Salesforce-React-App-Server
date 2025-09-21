import axios from "axios";

export const getToDoList = async (req, res) => {

    try {
        const { authToken, instanceURL } = req.query;
        if (!authToken || !instanceURL) {
            return res.status(400).json({ message: "Please provide authtoken" });
        }
        const response = await axios.get(
            `${instanceURL}/services/data/v61.0/query?q=SELECT ID,Name,Title__c,Description__c,Due_Date__c,Is_Completed__c,Priority__c,Account__c FROM To_Do__c ORDER BY Due_Date__c ASC`,
            {
                headers: { "Authorization": `OAuth ${authToken}` }
            }
        )
        res.json(response.data);
    }
    catch (err) {
        console.error(`Error ${err.message}`);
        res.status(500).json(err.response?.data || { error: err.message });
    }
}

export const createToDoList = async (req, res) => {

    try {
        const { authToken, instanceURL } = req.query;
        if (!authToken || !instanceURL) {
            return res.status(400).json({ message: "Please provide authtoken" });
        }
        const response = await axios.post(
            `${instanceURL}/services/data/v56.0/sobjects/To_Do__c/`,
            req.body,
            {
                headers: { "Authorization": `OAuth ${authToken}` }
            }
        )
        res.json(response.data);
    }
    catch (err) {
        console.error(`Error ${err.message}`);
        res.status(500).json(err.response?.data || { error: err.message });
    }
}