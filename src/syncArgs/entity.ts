// Abstract Factory & Specific Factory
export abstract class EntityFactory {
    abstract compareData(source: string, destination: string): Promise<void>;
}