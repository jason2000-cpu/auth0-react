# Auth0 React Authentication Demo

A modern, responsive React application demonstrating seamless integration with Auth0 for user authentication. Built with TypeScript, Vite, and featuring a beautiful, intuitive user interface.

## 🌟 Features

- **🔐 Secure Authentication**: Complete Auth0 integration with login/logout functionality
- **👤 User Profile Management**: Display user information including avatar, name, email, and verification status
- **📱 Responsive Design**: Mobile-first approach with beautiful gradients and animations
- **⚡ Modern Stack**: Built with React 19, TypeScript, and Vite for optimal performance
- **🎨 Beautiful UI**: Custom-designed interface with Auth0 branding and smooth transitions
- **🌐 Ngrok Support**: Configured for easy tunneling and remote access

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Auth0 account ([Sign up for free](https://auth0.com/signup))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auth0-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Auth0 credentials**
   
   Open `src/main.tsx` and update the Auth0 configuration:
   ```typescript
   <Auth0Provider
     domain="YOUR_AUTH0_DOMAIN"
     clientId="YOUR_AUTH0_CLIENT_ID"
     authorizationParams={{
       redirect_uri: window.location.origin,
     }}
   >
   ```

4. **Set up Auth0 Application**
   
   In your Auth0 Dashboard, configure your application with:
   - **Allowed Callback URLs**: `http://localhost:5173`, `http://localhost:5174`, and your ngrok URL
   - **Allowed Logout URLs**: Same as above
   - **Allowed Web Origins**: Same as above

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` to see your application running!

## 📁 Project Structure

```
auth0-react/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── assets/           # Asset files
│   │   └── react.svg     # React logo
│   ├── App.tsx           # Main application component with Auth0 integration
│   ├── App.css           # Application styles
│   ├── main.tsx          # Application entry point with Auth0 provider
│   └── index.css         # Global styles
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration with ngrok support
└── README.md             # This file
```

## 🛠 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 Configuration

### Vite Configuration

The project includes Vite configuration optimized for:
- **Ngrok tunneling**: Pre-configured to accept requests from ngrok domains
- **Network access**: Exposes the dev server to your local network
- **Hot module replacement**: Fast development experience

### Auth0 Integration

The application uses Auth0 React SDK with:
- **Secure authentication flow**: Industry-standard OAuth 2.0
- **User profile management**: Complete user information display
- **Protected routes**: Ready for route protection implementation
- **Custom branding**: Beautiful Auth0-themed interface

## 🌐 Ngrok Setup

To expose your local development server:

1. **Install ngrok** (if not already installed)
   ```bash
   npm install -g ngrok
   ```

2. **Start ngrok tunnel**
   ```bash
   ngrok http 5173
   ```

3. **Update Auth0 Dashboard** with the provided ngrok URL

4. **Access your app** through the ngrok URL

## 🎨 UI Components

### Login Screen
- Beautiful gradient background
- Auth0 branded header
- Intuitive login button with hover effects
- Responsive design for all devices

### User Profile
- Avatar display (user picture or initials)
- User information (name, email, user ID)
- Email verification badge
- Logout functionality

### Loading States
- Smooth loading spinner
- Professional loading screen with gradient background

## 🔒 Security Best Practices

- **Client Secret**: Never exposed in frontend code
- **Environment Variables**: Use `.env` files for sensitive data
- **HTTPS**: Always use HTTPS in production
- **CORS**: Properly configured for your domains

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Hosting
The built files in `dist/` are ready for deployment to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

1. **Auth0 Login Redirect Issues**
   - Ensure all URLs are correctly configured in Auth0 Dashboard
   - Check that `redirect_uri` matches your configured URLs

2. **Ngrok Tunnel Issues**
   - Verify ngrok is running and pointing to the correct port
   - Update Auth0 Dashboard with the current ngrok URL

3. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript configuration in `tsconfig.json`

### Need Help?

- [Auth0 Documentation](https://auth0.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

---

**Happy coding!** 🎉