import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const getAuthToken = async (req, res) => {
    try {
        console.log("API Hit");
        let sfPostparams = new URLSearchParams({
            grant_type: process.env.SF_GRANT_TYPE,
            client_id: process.env.SF_CLIENT_ID,
            client_secret: process.env.SF_CLIENT_SECRET,
            username: process.env.SF_USERNAME,
            password: process.env.SF_PASSWORD
        });
        const response = await axios.post(
            "https://login.salesforce.com/services/oauth2/token",
            sfPostparams,
            {
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
        );

        res.json(response.data);
    } catch (err) {
        res.status(500).json(err.response?.data || { error: err.message });
    }
}
