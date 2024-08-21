// App.tsx
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = '401231327202-33i08kq4lr5lsrorr4dhq5p65f8vu5us.apps.googleusercontent.com'; // Thay thế bằng Client ID của bạn

const LoginHook: React.FC = () => {
  const handleLoginSuccess = (credentialResponse: any) => {
   
    console.log(); // Bạn có thể xử lý thông tin người dùng tại đây
  };

  const handleLoginError = (error: any) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <h1>Login with Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
        
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginHook;
