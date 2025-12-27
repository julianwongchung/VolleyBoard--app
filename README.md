<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 🏐 VolleyBoard

A modern, feature-rich volleyball tournament management application built with React, TypeScript, and Supabase.

## ✨ Features

- 📊 **Tournament Management**: Create and manage volleyball tournaments with ease
- 👥 **Team Management**: Track teams, players, and statistics
- 🎯 **Live Scoring**: Real-time scoreboard for matches
- 📈 **Standings**: Automatic calculation of team standings and rankings
- ⚙️ **Customizable Settings**: Configure scoring rules and preferences
- 🌙 **Modern UI**: Beautiful dark mode interface with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- A Supabase account (free tier available)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/julianwongchung/VolleyBoard--app.git
   cd VolleyBoard--app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials (see [Database Setup](#database-setup))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🗄️ Database Setup

This app uses Supabase as its database. Follow the detailed setup guide:

📖 **[Complete Database Setup Guide](./DATABASE_SETUP.md)**

Quick summary:
1. Create a free Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL schema from `supabase/schema.sql`
3. Copy your project URL and anon key to `.env`
4. Start developing!

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/julianwongchung/VolleyBoard--app)

1. Click the "Deploy" button above
2. Connect your GitHub account
3. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy!

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Testing**: Vitest + React Testing Library

## 📁 Project Structure

```
VolleyBoard/
├── components/       # Reusable UI components
├── views/           # Page components
├── lib/             # Database services and utilities
│   ├── supabase.ts  # Supabase client
│   ├── database.ts  # Database operations
│   └── hooks.ts     # Custom React hooks
├── supabase/        # Database schema and migrations
├── test/            # Test files
└── types.ts         # TypeScript type definitions
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 License

MIT License - feel free to use this project for your own tournaments!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

If you have any questions or issues, please open an issue on GitHub.

---

Built with ❤️ for volleyball enthusiasts
