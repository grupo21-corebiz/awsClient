export async function awsMid(
  ctx: Context,
  next: () => Promise<any>
) {
  console.log(ctx.body)
  await next()
}
