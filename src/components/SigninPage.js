import React, { useState } from 'react';
import './SigninPage.css';

function SigninPage() {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      title: 'Sign In',
      username: 'Username',
      password: 'Password',
      role: 'Select Role',
      signIn: 'Sign In',
      prisoner: 'Prisoner',
      judge: 'Judicial Authority',
      legalAid: 'Legal Aid Provider',
    },
    hi: {
      title: 'साइन इन करें',
      username: 'उपयोगकर्ता नाम',
      password: 'पासवर्ड',
      role: 'भूमिका चुनें',
      signIn: 'साइन इन करें',
      prisoner: 'कैदी',
      judge: 'न्यायिक अधिकारी',
      legalAid: 'कानूनी सहायता प्रदाता',
    },
  };

  const t = translations[language];

  return (
    <div className="card">
      <div className="card-header">
        <h1>{t.title}</h1>
        <div className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}>
          🌐
        </div>
      </div>
      <div className="card-content">
        <form>
          <div classname="locat">
          <div className="form-group">
            <label>{t.username}</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>{t.password}</label>
            <input type="password" required />
          </div>
          <div className="form-group">
            <label>{t.role}</label>
            <select required>
              <option value="" disabled selected>{t.role}</option>
              <option value="prisoner">{t.prisoner}</option>
              <option value="judge">{t.judge}</option>
              <option value="legalAid">{t.legalAid}</option>
            </select>
          </div>
          <button type="submit">{t.signIn}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
