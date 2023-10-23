import { EntityFactory } from "./entity"
import axios from 'axios';
import { AirtableConfig, QDConfig } from "../config";

interface Quest {
    id?: string;
    questsName?: string;
    questDescription?: string;
    updateAt?: string;
}

export class QuestFactory extends EntityFactory {

    private async getAirtableData(): Promise<Quest[]> {
        // Assuming you have set up Airtable API and got the API key, table name, and base ID.
        const API_URL = AirtableConfig.quest_url;
        const API_KEY = AirtableConfig.key;
        
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
    
        return response.data.records
        .filter((record: {fields: { [x: string]: any; }; }) => record.fields["UpdateAt"])  // Added this line to filter out items without 'UpdateAt'
        .map((record: {fields: { [x: string]: any; }; id: string }) => ({  // Added 'id: string' to capture the ID from the record
            id: record.id,  // Store the ID
            questsName: record.fields["Quests Name"],
            questDescription: record.fields["Quest Description"] || "Description",
            updateAt: record.fields["UpdateAt"]
        }));
    }
    
    private async getQDData(): Promise<Quest[]> {
        const API_ENDPOINT = QDConfig.quest;
        const response = await axios.get(API_ENDPOINT);
    
        return response.data
            .filter((item: { created_by: number; }) => item.created_by === 1)
            .map((item: { id: { toString: () => any; }; name: any; description: any; updated_at: string; }) => ({
                id: item.id.toString(),
                questsName: item.name,
                questDescription: item.description,
                updateAt: item.updated_at.split('T')[0]
            }));
    }

    private fetchDataBySource(source: string): Promise<Quest[]> {
        switch(source) {
            case 'airtable':
                return this.getAirtableData();
            case 'qd':
                return this.getQDData();
            // Add more data sources as needed
            default:
                throw new Error(`Unsupported data source: ${source}`);
        }
    }

    async updateQDData(item: Quest) {
        const UPDATE_ENDPOINT = QDConfig.quest;
        await axios.put(`${UPDATE_ENDPOINT}/${item.id}`, {
            // Map the item fields to whatever your API expects for the PUT request
            name: item.questsName,
            description: item.questDescription
            //... any other fields
        });
    }
    
    async createQDData(item: Quest) {
        const CREATE_ENDPOINT = QDConfig.quest;
        await axios.post(CREATE_ENDPOINT, {
            // Map the item fields to whatever your API expects for the POST request
            name: item.questsName,
            description: item.questDescription,
            created_by: 1
            //... any other fields
        });
    }

    async createAirtableData(item: Quest) {
        const API_URL = AirtableConfig.quest_url;
        const API_KEY = AirtableConfig.key;

        await axios.post(API_URL, {
            records: [{
                fields: {
                    "Quests Name": item.questsName,
                    "Quest Description": item.questDescription,
                    "UpdateAt": item.updateAt
                    // ... (add other fields as needed)
                }
            }]
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
    }

    async updateAirtableData(item: Quest) {
        if (!item.id) throw new Error("ID is required to update a record");

        const API_URL = AirtableConfig.quest_url;
        const API_KEY = AirtableConfig.key;

        await axios.patch(API_URL, {
            records: [{
                id: item.id,
                fields: {
                    "Quests Name": item.questsName,
                    "Quest Description": item.questDescription,
                    "UpdateAt": item.updateAt
                    // ... (add other fields as needed)
                }
            }]
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
    }

    async updateApiData(item: Quest, source: string) { // Added source parameter
        switch (source) {
            case 'airtable':
                await this.updateAirtableData(item);
                break;
            case 'qd':
                await this.updateQDData(item);
                break;
            default:
                throw new Error(`Unsupported data source for update: ${source}`);
        }
    }

    async createApiData(item: Quest, source: string) { // Added source parameter
        switch (source) {
            case 'airtable':
                await this.createAirtableData(item);
                break;
            case 'qd':
                await this.createQDData(item);
                break;
            default:
                throw new Error(`Unsupported data source for create: ${source}`);
        }
    }
    
    async compareData(source: string, destination: string): Promise<void>{

        const data1 = await this.fetchDataBySource(source);
        const data2 = await this.fetchDataBySource(destination);
    
        const newerInSource: Quest[] = [];
        const onlyInSource: Quest[] = [];
    
        data1.forEach(async item1 => {
            const item2 = data2.find(item => item.questsName === item1.questsName);
            
            if (item2) {
                if (new Date(item1.updateAt!) > new Date(item2.updateAt!)) {
                    newerInSource.push(item2);
                    await this.updateApiData(item2, destination);  // Update the record in API data
                }
            } else {
                onlyInSource.push(item1);
                await this.createApiData(item1, destination);
            }
        });

        console.log("Newer in Source:" + source, newerInSource);
        console.log("Only in Source:" + source, onlyInSource);

    }
    
}