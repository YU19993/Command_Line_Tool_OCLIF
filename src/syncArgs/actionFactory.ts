import { EntityFactory } from "./entity"
import axios from 'axios';

interface Action {
    id?: string;
    actionsName?: string;
    actionDescription?: string;
    updateAt?: string;
}

export class ActionFactory extends EntityFactory {

    private async getAirtableData(): Promise<Action[]> {
        // Assuming you have set up Airtable API and got the API key, table name, and base ID.
        const API_URL = `https://api.airtable.com/v0/appZkDuQvtC8u1ie1/Helpful%20actions`;
        const API_KEY = 'keyisLOHFr9WTI5MP';
        
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });
    
        return response.data.records.map((record: {fields: { [x: string]: any; }; }) => ({
            actionsName: record.fields["Helpful Action"],
            actionDescription: record.fields["Description"] || "Description",
            updateAt: record.fields["UpdateAt"]
        }));
    }
    
    private async getQDData(): Promise<Action[]> {
        const API_ENDPOINT = 'http://localhost:3000/actions';
        const response = await axios.get(API_ENDPOINT);
    
        return response.data.map((item: { id: { toString: () => any; }; name: any; description: any; updated_at: string; }) => ({
            id: item.id.toString(),
            actionsName: item.name,
            actionDescription: item.description,
            updateAt: item.updated_at.split('T')[0]
        }));
    }

    private fetchDataBySource(source: string): Promise<Action[]> {
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

    async updateApiData(item: Action) {
        const UPDATE_ENDPOINT = 'http://localhost:3000/actions';
        await axios.put(`${UPDATE_ENDPOINT}/${item.id}`, {
            // Map the item fields to whatever your API expects for the PUT reaction
            name: item.actionsName,
            description: item.actionDescription
            //... any other fields
        });
    }
    
    async createApiData(item: Action) {
        const CREATE_ENDPOINT = 'http://localhost:3000/actions';
        await axios.post(CREATE_ENDPOINT, {
            // Map the item fields to whatever your API expects for the POST reaction
            name: item.actionsName,
            description: item.actionDescription,
            created_by: 1
            //... any other fields
        });
    }
    
    async compareData(source: string, destination: string): Promise<void>{

        const data1 = await this.fetchDataBySource(source);
        const data2 = await this.fetchDataBySource(destination);
    
        const newerInSource: Action[] = [];
        const onlyInSource: Action[] = [];
    
        data1.forEach(async item1 => {
            const item2 = data2.find(item => item.actionsName === item1.actionsName);
            
            if (item2) {
                if (new Date(item1.updateAt!) > new Date(item2.updateAt!)) {
                    newerInSource.push(item2);
                    await this.updateApiData(item2);  // Update the record in API data
                }
            } else {
                onlyInSource.push(item1);
                await this.createApiData(item1);
            }
        });

        console.log("Newer in Source:" + source, newerInSource);
        console.log("Only in Source:" + source, onlyInSource);

    }
    
}