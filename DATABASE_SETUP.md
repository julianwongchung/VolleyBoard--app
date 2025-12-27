# VolleyBoard Database Setup Guide

This guide will help you set up Supabase as the database for your VolleyBoard application.

## Prerequisites
- A GitHub account (for deploying to Vercel)
- A Supabase account (free tier available)

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click **"New Project"**
3. Fill in the project details:
   - **Name**: VolleyBoard
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Free tier is sufficient to start
4. Click **"Create new project"** and wait 2-3 minutes for setup

## Step 2: Set Up Database Schema

1. In your Supabase project dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Copy the entire contents of `supabase/schema.sql` from this project
4. Paste it into the SQL editor
5. Click **"Run"** to execute the schema
6. You should see a success message and your tables will be created

## Step 3: Get Your API Credentials

1. In your Supabase project, click **"Settings"** (gear icon) in the left sidebar
2. Click **"API"** under Project Settings
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (a long string starting with `eyJ...`)
4. Keep this page open - you'll need these values next

## Step 4: Configure Local Environment

1. In your VolleyBoard project folder, create a new file called `.env`
2. Copy the contents from `.env.example`
3. Replace the placeholder values with your actual Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

4. Save the file (`.env` is already in `.gitignore` so it won't be committed)

## Step 5: Test the Connection

1. Start your development server:
```bash
npm run dev
```

2. Open your browser and check the console for any errors
3. The app should now be connected to your Supabase database!

## Step 6: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [https://vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import your GitHub repository: `julianwongchung/VolleyBoard--app`
4. In the **"Environment Variables"** section, add:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
5. Click **"Deploy"**
6. Wait 2-3 minutes for deployment to complete
7. Your app is now live! 🎉

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and add your environment variables when asked

## Step 7: Verify Everything Works

1. Visit your deployed app URL
2. Try creating a new tournament
3. Check your Supabase dashboard to see if the data was saved
4. Navigate through the app to ensure all features work

## Database Structure

Your database now has these tables:

- **tournaments**: Stores tournament information
- **teams**: Stores team data and player rosters
- **matches**: Stores match results and scores
- **settings**: Stores user preferences

## Next Steps

### Migrate from Mock Data to Real Database

The app currently uses mock data from `constants.tsx`. To use the real database:

1. Update components to use the database services from `lib/database.ts`
2. Replace `MOCK_TOURNAMENTS` imports with `tournamentService.getAll()`
3. Add loading states and error handling
4. Test thoroughly before deploying

Example:
```typescript
// Before (mock data)
import { MOCK_TOURNAMENTS } from '../constants';

// After (real database)
import { tournamentService } from '../lib/database';
const [tournaments, setTournaments] = useState([]);

useEffect(() => {
  tournamentService.getAll()
    .then(data => setTournaments(data))
    .catch(error => console.error(error));
}, []);
```

### Security Considerations

The current setup uses **public access policies** for development. Before going to production:

1. Implement proper authentication (Supabase Auth)
2. Update Row Level Security (RLS) policies
3. Restrict access based on user roles
4. Add input validation and sanitization

## Troubleshooting

### "Failed to fetch" errors
- Check that your `.env` file has the correct credentials
- Verify your Supabase project is running (not paused)
- Check browser console for CORS errors

### Data not saving
- Verify the SQL schema was executed successfully
- Check Supabase logs in the dashboard
- Ensure RLS policies allow the operation

### Deployment issues
- Make sure environment variables are set in Vercel
- Check Vercel deployment logs for errors
- Verify build completes successfully locally first

## Support

- **Supabase Docs**: https://supabase.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **VolleyBoard Issues**: https://github.com/julianwongchung/VolleyBoard--app/issues

---

**Congratulations!** Your VolleyBoard app now has a production-ready database! 🏐
