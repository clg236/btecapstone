# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:22-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app


COPY package.json package-lock.json ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  fi

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

ENV NEXT_DEBUG 1

# Remove existing .next folder if it exists
RUN rm -rf .next

RUN \
  if [ -f package-lock.json ]; then npm run build; \
  fi


FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]