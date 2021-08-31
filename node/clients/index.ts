import { IOClients } from "@vtex/api"
import awsClient from './aws'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get aws() {
    return this.getOrSet('aws', awsClient)
  }
}
