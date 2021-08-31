export async function allStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  console.log(ctx.clients.aws.getLeads())
  await next()
}
