import {Command } from '@oclif/core'
import { EntityFactory } from "../syncArgs/entity"
import { QuestFactory } from "../syncArgs/questFactory"
import {actionArg, sourceArg, destinationArg} from '../syncArgs/args'
import { ActionFactory } from '../syncArgs/actionFactory'

export default class Sync extends Command {
  static description = 'describe the command here'

  static args = {
    action: actionArg,
    source: sourceArg,
    destination: destinationArg
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(Sync)

    // Print the values of the arguments
    this.log(`Entity: ${args.action}`);
    this.log(`Source: ${args.source}`);
    this.log(`Destination: ${args.destination}`);

    let factory: EntityFactory;

    switch (args.action) {
        case 'quest':
            factory = new QuestFactory();
            break;
        // Add other entities like 'help', 'association' here
        default:
            throw new Error('Unsupported entity type');
    }

    factory.compareData(args.source, args.destination);

  }
}