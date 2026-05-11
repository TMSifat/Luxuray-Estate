-- Create properties table
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  price NUMERIC NOT NULL,
  location TEXT NOT NULL,
  beds INTEGER,
  baths INTEGER,
  sqft INTEGER,
  type TEXT,
  image TEXT,
  images TEXT[],
  description TEXT,
  amenities TEXT[],
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'sale',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leads table (backup for GHL)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  property_id TEXT,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
