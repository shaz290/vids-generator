import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./configs/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_RC9vJnboqEY3@ep-purple-waterfall-ahfrcxq3-pooler.c-3.us-east-1.aws.neon.tech/ai-short-db?sslmode=require&channel_binding=require'
    }
});
