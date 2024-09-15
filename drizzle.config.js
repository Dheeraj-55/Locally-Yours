/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-content-generator_owner:a5gvZfVmUbF2@ep-falling-math-a5abyu82.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require'
    }
  };
  