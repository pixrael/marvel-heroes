import { cleanup, render } from '@testing-library/react';
import { describe, it, expect, vi, Mock, afterEach } from 'vitest';
import FavoriteCharacterFetcher from './favorite-character-fetcher';
import { useFetchCharacterById } from '../../hooks/favorite-characters/useFetchCharacterById';
import {
  CHARACTER_BY_ID_RAW,
  useFetchCharacterByIdParse,
} from '../../hooks/favorite-characters/useFetchCharacterByIdParse';
import { useSaveFavoriteCharacters } from '../../hooks/favorite-characters/useSaveFavoriteCharacters';

vi.mock('../../hooks/favorite-characters/useFetchCharacterById', () => ({
  useFetchCharacterById: vi.fn((id: number) => {}),
}));
const useFetchCharacterByIdSpy = useFetchCharacterById as Mock<
  (id: number) => {
    data: any;
    isLoading: boolean;
    error: undefined;
  }
>;

vi.mock('../../hooks/favorite-characters/useFetchCharacterByIdParse', () => ({
  useFetchCharacterByIdParse: vi.fn((id: number) => {}),
}));
const useFetchCharacterByIdParseSpy = useFetchCharacterByIdParse as Mock<
  (data: CHARACTER_BY_ID_RAW) => {
    parsedData:
      | {
          id: number;
          name: string;
          img: string;
        }
      | undefined;
  }
>;

vi.mock('../../hooks/favorite-characters/useSaveFavoriteCharacters', () => ({
  useSaveFavoriteCharacters: vi.fn((id: number) => {}),
}));
const useSaveFavoriteCharactersSpy = useSaveFavoriteCharacters as Mock<
  (
    parsedData: {
      id: number;
      name: string;
      img: string;
    },
    requestData: {
      isLoading: boolean;
      error: any;
    }
  ) => void
>;

describe('FavoriteCharacterFetcher', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });
  it('Should call save the parsed data if the the parsed data is truthy with the parsedData', () => {
    useFetchCharacterByIdSpy.mockReturnValue({
      data: { id: 0, name: 'name' },
      isLoading: false,
      error: undefined,
    });

    useFetchCharacterByIdParseSpy.mockReturnValue({
      parsedData: {
        id: 0,
        name: 'name',
        img: 'img',
      },
    });

    render(<FavoriteCharacterFetcher id={0} />);

    expect(useFetchCharacterById).toHaveBeenCalledOnce();
    expect(useSaveFavoriteCharactersSpy).toHaveBeenCalledWith(
      {
        id: 0,
        name: 'name',
        img: 'img',
      },
      { isLoading: false, error: undefined }
    );
    expect(true).toBeTruthy();
  });

  it('Should call useSaveFavoriteCharacters with the default object { id, img: "", name: "" }', () => {
    useFetchCharacterByIdSpy.mockReturnValue({
      data: 'origData number TWO',
      isLoading: false,
      error: undefined,
    });

    useFetchCharacterByIdParseSpy.mockReturnValue({
      parsedData: undefined,
    });

    render(<FavoriteCharacterFetcher id={0} />);

    expect(useFetchCharacterById).toHaveBeenCalledOnce();
    expect(useSaveFavoriteCharactersSpy).toHaveBeenCalledWith(
      {
        id: 0,
        name: '',
        img: '',
      },
      { isLoading: false, error: undefined }
    );
    expect(true).toBeTruthy();
  });
});
