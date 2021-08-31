import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export default class Aws extends ExternalClient {
  private routes = {
    getLeads: () => '/prod/leads'
  }

  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://7n2b3cjwuf.execute-api.us-east-1.amazonaws.com', context, {
      ...options
    })
  }

  public getLeads() {
    return this.http.get(this.routes.getLeads());
  }
}
