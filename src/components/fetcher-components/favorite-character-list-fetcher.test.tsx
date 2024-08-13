import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import FavoriteCharacterListFetcher from './favorite-character-list-fetcher';
import { FavoriteContext } from '../../app-state/contexts/favorite-context';
import { FavoriteInitialValue } from '../../app-state/contexts/initial-context-values';

vi.mock('./favorite-character-fetcher', () => ({
  default: ({ id }: { id: number }) => {
    return <div>Mocked component id: {id}</div>;
  },
}));

describe('FavoriteCharacter', () => {
  afterEach(() => {
    cleanup();
  });
  it('Should render the as FavoriteCharacter components favoriteIdList from  FavoriteContext states', () => {
    render(
      <FavoriteContext.Provider
        value={{
          ...FavoriteInitialValue,
          favoriteIdList: [1, 2, 3, 4],
        }}
      >
        <FavoriteCharacterListFetcher />
      </FavoriteContext.Provider>
    );

    expect(screen.getByText('Mocked component id: 1'));
    expect(screen.getByText('Mocked component id: 2'));
    expect(screen.getByText('Mocked component id: 3'));
    expect(screen.getByText('Mocked component id: 4'));
  });

  it('Should render not render any FavoriteCharacter component if the favoriteIdList from  FavoriteContext is empty', () => {
    render(
      <FavoriteContext.Provider
        value={{
          ...FavoriteInitialValue,
          favoriteIdList: [],
        }}
      >
        <FavoriteCharacterListFetcher />
      </FavoriteContext.Provider>
    );

    expect(screen.queryByText('Input: 1')).toBeNull();
  });
});
