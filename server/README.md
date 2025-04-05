# RelSoft Server

This is the server component of the RelSoft website.

## Supabase Setup

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Create a new project
3. Note your project URL and anon key

### 2. Set Up Environment Variables

Create a `.env` file in the server directory with the following variables:

```
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.lzwaqrcdpqdliwgnpnjb.supabase.co:5432/postgres
NODE_ENV=development

# Supabase credentials
SUPABASE_URL=https://lzwaqrcdpqdliwgnpnjb.supabase.co
SUPABASE_KEY=your-supabase-anon-key
```

Replace `[YOUR-PASSWORD]` with your actual database password and `your-supabase-anon-key` with your actual Supabase anon key.

### 3. Run Database Migrations

1. Go to the SQL Editor in your Supabase dashboard
2. Copy the contents of `server/db/migrations.sql`
3. Paste into the SQL Editor and run the query

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
npm run dev
```

## Deployment to Vercel

1. Add the following environment variables to your Vercel project:

   - `DATABASE_URL`
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
   - `NODE_ENV=production`

2. Deploy your project to Vercel

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Submit a contact form
- `GET /api/contact` - Get all contact messages (protected in production)
