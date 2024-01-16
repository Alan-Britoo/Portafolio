import React from 'react';

export function NavBar({ nom }) {
  return (
    <header>
      <a href="">{nom}</a>
    </header>
  );
}

export function NavIcons({ url, alt }) {
  return <img src={url} alt={alt} />;
}
