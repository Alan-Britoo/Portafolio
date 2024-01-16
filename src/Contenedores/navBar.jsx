import React from 'react';

export function NavBar({ nom, url }) {
  return (
    <>
      <a href={url}>{nom}</a>
    </>
  );
}

export function NavIcons({ url, alt, url2}) {
  return (
  <>
  <a href={url2}><img src={url} alt={alt} /></a>
  </>
  );
}
