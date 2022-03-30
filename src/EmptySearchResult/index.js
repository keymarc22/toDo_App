import React from 'react';

function EmptySearchResults({searchingText}) {
  return (
    <p>No se encontraron resultados {searchingText}</p>
  )
}

export { EmptySearchResults };