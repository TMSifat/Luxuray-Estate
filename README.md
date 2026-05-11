# Luxury Real Estate | GHL & Supabase Integration

A premium, modern real estate lead generation website built with Next.js 15, integrated with GoHighLevel CRM and Supabase Backend.

## 🚀 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Backend**: Supabase (Database & Storage)
- **CRM**: GoHighLevel (Lead Management & Automation)
- **Deployment**: Vercel Ready

## 🛠️ Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
# GoHighLevel API
GHL_API_KEY=your_ghl_api_key
GHL_LOCATION_ID=your_location_id
GHL_CALENDAR_URL=https://msgsndr.com/widget/booking/YOUR_ID

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Public Widget
NEXT_PUBLIC_GHL_CHAT_WIDGET_ID=your_widget_id
```

### 2. Database Setup (Supabase)
Run the SQL queries in `supabase_schema.sql` within your Supabase SQL Editor to create the necessary tables for properties and leads.

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Locally
```bash
npm run dev
```

## 📈 Lead Flow
1. **User Submission**: Lead fills out the contact or inquiry form.
2. **Supabase**: Data is saved to the `leads` table for permanent storage and analytics.
3. **GoHighLevel**: A new contact is created/updated in GHL, tagged, and added to the relevant automation workflow.
4. **Follow-up**: GHL triggers automated email/SMS responses and notifies the admin.

## 🎨 Design Philosophy
The site uses a "Luxury Modern" aesthetic with:
- Gold gradients and accents
- Deep black and clean white backgrounds
- Premium typography (Playfair Display)
- Fluid animations for a high-end feel

## 📄 License
MIT
