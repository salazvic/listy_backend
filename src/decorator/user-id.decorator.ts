import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const UserId = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): string | null => {
    if(ctx.getType() === 'http') {
      const request = ctx.switchToHttp().getRequest()
      return request.user?.sub || request.user?.userId
    }

    if(ctx.getType() === 'ws') {
      const client = ctx.switchToWs().getClient()
      return client.data?.user?.sub || client.data?.user?.userId
    }

    return null
  },
)